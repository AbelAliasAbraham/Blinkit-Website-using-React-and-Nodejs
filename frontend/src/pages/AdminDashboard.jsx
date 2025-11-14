import React, { useState } from 'react';
import axios from 'axios';
// Assuming this is the correct path for your admin specific styles
import './css/AdminDashboard.css'; 

const AdminDashboard = () => {
  // === STATE FOR BULK UPLOAD (EXISTING) ===
  const [file, setFile] = useState(null);

  // === STATE FOR SINGLE PRODUCT CREATION (NEW) ===
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [composition, setComposition] = useState('');
  const [types, setTypes] = useState(''); 
  const [nutritionalValues, setNutritionalValues] = useState('');
  const [uses, setUses] = useState('');
  const [benefits, setBenefits] = useState('');
  const [productImage, setProductImage] = useState(null); 
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  
  // Use VITE environment variable
  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000'; 

  const categories = [ // Consistent list for dropdown
    'Dairy & Eggs', 
    'Fruits & Veg', 
    'Snacks & Munchies',
    'Cold Drinks & Juices',
    'Instant & Frozen Food',
    'Paan Corner', 
    'Bakery & Biscuits',
    'Pet Supplies',
    'Home & Kitchen',
    'Baby Care',
    'Pharmacy'
  ];
  
  // === BULK UPLOAD HANDLER (EXISTING) ===
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const token = localStorage.getItem('token');
    
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    try {
      await axios.post(`${API_URL}/api/admin/products/upload`, formData, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      });
      alert('Products uploaded!');
      setFile(null);
    } catch (err) {
      console.error(err);
      alert('Upload failed. Check console for details and ensure you are logged in as admin.');
    }
  };

  // === FAQ HANDLERS (NEW) ===
  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const addFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const removeFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  // === SINGLE PRODUCT CREATION HANDLER (NEW) ===
  const handleCreateProduct = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Admin token not found. Please log in.');
        return;
    }

    if (!productImage || !productName || !price || !category) {
        alert('Please fill out Name, Price, Category, and select a Product Image.');
        return;
    }
    
    // 🔑 DB-READY DATA PARSING: Convert comma-separated string to array, and filter out incomplete FAQs.
    const typesArray = types.split(',').map(t => t.trim()).filter(t => t.length > 0);
    const validFaqs = faqs.filter(faq => faq.question && faq.answer);

    // 🔑 DB-READY TRANSPORT: Use FormData for multipart/form-data (image + text fields)
    const formData = new FormData();
    formData.append('image', productImage);
    formData.append('name', productName);
    formData.append('price', parseFloat(price));
    formData.append('category', category);
    formData.append('composition', composition);
    
    // 🔑 CRITICAL FOR DB STORAGE: Stringify arrays/objects to send via FormData. 
    // The backend must parse this string back into JSON.
    formData.append('types', JSON.stringify(typesArray)); 
    formData.append('nutritionalValues', nutritionalValues);
    formData.append('uses', uses);
    formData.append('benefits', benefits);
    formData.append('faqs', JSON.stringify(validFaqs)); 

    try {
        // POST request to the single product creation endpoint
        await axios.post(`${API_URL}/api/admin/product`, formData, {
            headers: { 
                Authorization: `Bearer ${token}`, 
                // Note: axios and FormData will automatically set the correct 'Content-Type': 'multipart/form-data' boundary
            },
        });
        alert('Product created successfully and saved to the database!');
        
        // Reset form fields
        setProductName('');
        setPrice('');
        setCategory('');
        setComposition('');
        setTypes('');
        setNutritionalValues('');
        setUses('');
        setBenefits('');
        setProductImage(null);
        setFaqs([{ question: '', answer: '' }]);
        document.getElementById('productImageInput').value = null; 

    } catch (err) {
        console.error('Product creation failed:', err.response ? err.response.data : err);
        alert('Product creation failed. Check console for details. Ensure your backend endpoint is correctly implemented.');
    }
  };


  return (
    <div className="admin-container container">
      <h2 className="section-title">Admin Dashboard</h2>
      
      {/* ==================================================================== */}
      {/* 🟢 1. CREATE SINGLE PRODUCT FORM */}
      {/* ==================================================================== */}
      <div className="admin-card">
        <h3 className="card-title">Create Single Product</h3>
        
        <div className="form-grid">
            {/* Row 1: Name, Price, Category */}
            <input 
              className="input-field" 
              placeholder="Product Name" 
              value={productName} 
              onChange={e => setProductName(e.target.value)} 
              required
            />
            <input 
              className="input-field" 
              type="number" 
              placeholder="Price (e.g., 99.50)" 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
              required
            />
            <select 
              className="input-field select-field" 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Row 2: Product Image */}
            <div className="input-group full-width">
                <label className="input-label">Product Image (Required)</label>
                <input 
                  type="file" 
                  id="productImageInput"
                  onChange={e => setProductImage(e.target.files[0])} 
                  className="input-file" 
                  accept="image/*"
                  required
                />
            </div>

            {/* Row 3: Composition & Types */}
            <textarea 
              className="input-field textarea-field" 
              placeholder="Composition/Ingredients" 
              value={composition} 
              onChange={e => setComposition(e.target.value)} 
              rows="3"
            />
            <textarea 
              className="input-field textarea-field" 
              placeholder="Types (Comma-separated: type1, type2, ...)" 
              value={types} 
              onChange={e => setTypes(e.target.value)} 
              rows="3"
            />

            {/* Row 4: Nutritional Values & Uses */}
            <textarea 
              className="input-field textarea-field" 
              placeholder="Nutritional Values" 
              value={nutritionalValues} 
              onChange={e => setNutritionalValues(e.target.value)} 
              rows="3"
            />
            <textarea 
              className="input-field textarea-field" 
              placeholder="Uses" 
              value={uses} 
              onChange={e => setUses(e.target.value)} 
              rows="3"
            />

            {/* Row 5: Benefits */}
            <textarea 
              className="input-field textarea-field full-width" 
              placeholder="Benefits" 
              value={benefits} 
              onChange={e => setBenefits(e.target.value)} 
              rows="3"
            />
        </div>

        {/* Dynamic FAQ Section */}
        <h4 className="sub-section-title">FAQs</h4>
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <input
                        className="input-field"
                        placeholder={`Question #${index + 1}`}
                        value={faq.question}
                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                    />
                    <textarea
                        className="input-field textarea-field"
                        placeholder={`Answer #${index + 1}`}
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                        rows="2"
                    />
                    {faqs.length > 1 && (
                        <button className="remove-faq-button" onClick={() => removeFaq(index)}>
                            Remove FAQ
                        </button>
                    )}
                </div>
            ))}
            <button className="button add-faq-button" onClick={addFaq}>
                + Add Another FAQ
            </button>
        </div>

        <button className="button full-width mt-5" onClick={handleCreateProduct}>
          Create Product and Save to DB
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 🔴 2. BULK UPLOAD SECTION (EXISTING) */}
      {/* ==================================================================== */}
      <div className="admin-card mt-8">
        <h3 className="card-title">Bulk Product Upload (CSV/Excel)</h3>
        <p className="text-sm text-gray-600 mb-3">Upload a CSV or Excel file to add multiple products at once.</p>
        <div className="input-group">
            <input 
              type="file" 
              onChange={e => setFile(e.target.files[0])} 
              className="input-file" 
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
        </div>
        <button 
          onClick={handleUpload} 
          className="button bg-gray-500 hover:bg-gray-600 full-width mt-3"
          disabled={!file}
        >
          Bulk Upload Products
        </button>
      </div>

    </div>
  );
};

export default AdminDashboard;