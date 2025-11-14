const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();
const vendors = [
  // Bangalore Locations (Central Area)
  {
    storeName: 'Quickmart HSR Layout',
    // Example coordinates for HSR Layout, Bangalore: [Longitude, Latitude]
    location: { type: 'Point', coordinates: [77.638400, 12.911600] },
    // You would typically link this to a User ID, for a seed, we can mock it
    userId: new mongoose.Types.ObjectId(),
  },
  {
    storeName: 'FastBasket Koramangala',
    // Example coordinates for Koramangala, Bangalore: [Longitude, Latitude]
    location: { type: 'Point', coordinates: [77.618600, 12.934500] },
    userId: new mongoose.Types.ObjectId(),
  },
  {
    storeName: 'InstantMart Whitefield',
    // Example coordinates for Whitefield, Bangalore: [Longitude, Latitude]
    location: { type: 'Point', coordinates: [77.749900, 12.936000] },
    userId: new mongoose.Types.ObjectId(),
  },
  
  // Gurgaon Locations (Near DLF Cyber City)
  {
    storeName: 'RapidGrocer Cyber Hub',
    // Example coordinates for Cyber Hub, Gurgaon: [Longitude, Latitude]
    location: { type: 'Point', coordinates: [77.088100, 28.494500] },
    userId: new mongoose.Types.ObjectId(),
  },
  {
    storeName: 'SpeedyShop Sector 56',
    // Example coordinates for Sector 56, Gurgaon: [Longitude, Latitude]
    location: { type: 'Point', coordinates: [77.098800, 28.448500] },
    userId: new mongoose.Types.ObjectId(),
  },
];
const products = [
  // ====================================================================
  // 1. DAIRY CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Milk 115ml',
    price: 10,
    category: 'Dairy & Eggs',
    image: 'https://blinkit.com/images/product/milk-115ml.jpg',
    stock: 200,
  },
  {
    name: 'Yogurt (Plain) 400g',
    price: 60,
    category: 'Dairy & Eggs',
    image: 'https://blinkit.com/images/product/yogurt-plain.jpg',
    stock: 150,
  },
  {
    name: 'Cheese Slices (200g)',
    price: 120,
    category: 'Dairy & Eggs',
    image: 'https://blinkit.com/images/product/cheese-slices.jpg',
    stock: 80,
  },
  {
    name: 'Butter (Salted) 100g',
    price: 55,
    category: 'Dairy & Eggs',
    image: 'https://blinkit.com/images/product/butter-salted.jpg',
    stock: 180,
  },
  {
    name: 'Brown Eggs (12 pcs)',
    price: 90,
    category: 'Dairy & Eggs',
    image: 'https://blinkit.com/images/product/brown-eggs.jpg',
    stock: 250,
  },

  // ====================================================================
  // 2. FRUITS and VEGETABLES CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Apples (Red Delicious) 1kg',
    price: 150,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/apples.jpg',
    stock: 100,
  },
  {
    name: 'Bananas (Fresh) 1 Dozen',
    price: 50,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/bananas.jpg',
    stock: 300,
  },
  {
    name: 'Oranges (Navel) 500g',
    price: 75,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/oranges.jpg',
    stock: 120,
  },
  {
    name: 'Grapes (Green Seedless) 250g',
    price: 99,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/grapes.jpg',
    stock: 110,
  },
  {
    name: 'Mangoes (Alphonso) 1kg (Seasonal)',
    price: 250,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/mangoes.jpg',
    stock: 50,
  },
  {
    name: 'Tomatoes 1kg',
    price: 30,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/tomatoes.jpg',
    stock: 150,
  },
  {
    name: 'Onions (Red) 1kg',
    price: 25,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/onions.jpg',
    stock: 220,
  },
  {
    name: 'Potatoes (Fresh) 1kg',
    price: 45,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/potatoes.jpg',
    stock: 200,
  },
  {
    name: 'Carrots (Indian) 500g',
    price: 55,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/carrots.jpg',
    stock: 140,
  },
  {
    name: 'Spinach Bunch (Palak)',
    price: 20,
    category: 'Fruits & Veg',
    image: 'https://blinkit.com/images/product/spinach.jpg',
    stock: 180,
  },
  // ====================================================================
  // 3. Snacks and Munchies CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Roasted Almonds 200g',
    price: 350,
    category: 'Snacks & Munchies',
    image: 'https://blinkit.com/images/product/almonds.jpg',
    stock: 80,
  },
  {
    name: 'Salted Peanuts 150g',
    price: 75,
    category: 'Snacks & Munchies',
    image: 'https://blinkit.com/images/product/peanuts.jpg',
    stock: 220,
  },
  {
    name: 'Veg Puff Packet',
    price: 60,
    category: 'Snacks & Munchies',
    image: 'https://blinkit.com/images/product/veg-puff.jpg',
    stock: 130,
  },
  {
    name: 'Plain Yogurt Dip 150g',
    price: 90,
    category: 'Snacks & Munchies',
    image: 'https://blinkit.com/images/product/yogurt-dip.jpg',
    stock: 110,
  },
  {
    name: 'Cheese Crackers 100g',
    price: 45,
    category: 'Snacks & Munchies',
    image: 'https://blinkit.com/images/product/crackers.jpg',
    stock: 250,
  },
  // ====================================================================
  // 4. Cold Drinks and Juices (5 Products)
  // ====================================================================
  {
    name: 'Coca-Cola Can 300ml',
    price: 60,
    category: 'Cold Drinks & Juices',
    image: 'https://blinkit.com/images/product/coca-cola-can.jpg',
    stock: 120,
  },
  {
    name: 'Fresh Orange Juice 1L',
    price: 180,
    category: 'Cold Drinks & Juices',
    image: 'https://blinkit.com/images/product/orange-juice-1l.jpg',
    stock: 80,
  },
  {
    name: 'Lemonade Bottle 500ml',
    price: 85,
    category: 'Cold Drinks & Juices',
    image: 'https://blinkit.com/images/product/lemonade-bottle.jpg',
    stock: 150,
  },
  {
    name: 'Packaged Litchi Drink 200ml',
    price: 35,
    category: 'Cold Drinks & Juices',
    image: 'https://blinkit.com/images/product/litchi-drink.jpg',
    stock: 100,
  },
  {
    name: 'Mineral Water Bottle 1L',
    price: 20,
    category: 'Cold Drinks & Juices',
    image: 'https://blinkit.com/images/product/water-bottle-1l.jpg',
    stock: 300,
  },
  // ====================================================================
  // 5. Instant and Frozen Food CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Frozen Paneer Tikka Masala (Ready-to-Eat)',
    price: 320,
    category: 'Instant & Frozen Food',
    image: 'https://blinkit.com/images/product/frozen-paneer.jpg',
    stock: 50,
  },
  {
    name: 'Instant Noodles (Spicy Chicken)',
    price: 60,
    category: 'Instant & Frozen Food',
    image: 'https://blinkit.com/images/product/instant-noodles.jpg',
    stock: 120,
  },
  {
    name: 'Frozen Veggie Burger Patties (Pack of 4)',
    price: 180,
    category: 'Instant & Frozen Food',
    image: 'https://blinkit.com/images/product/frozen-patties.jpg',
    stock: 75,
  },
  {
    name: 'Instant Oatmeal (Maple & Brown Sugar) Sachets',
    price: 150,
    category: 'Instant & Frozen Food',
    image: 'https://blinkit.com/images/product/instant-oatmeal.jpg',
    stock: 90,
  },
  {
    name: 'Frozen Mini Samosas (500g)',
    price: 210,
    category: 'Instant & Frozen Food',
    image: 'https://blinkit.com/images/product/frozen-samosas.jpg',
    stock: 65,
  },
  // ====================================================================
  // 6. Paan Corner  CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Meetha Paan (Sweet)',
    price: 35,
    category: 'Paan Corner',
    image: 'https://blinkit.com/images/product/paan-meetha.jpg',
    stock: 200,
  },
  {
    name: 'Saada Paan (Plain)',
    price: 25,
    category: 'Paan Corner',
    image: 'https://blinkit.com/images/product/paan-saada.jpg',
    stock: 250,
  },
  {
    name: 'Maghai Paan',
    price: 50,
    category: 'Paan Corner',
    image: 'https://blinkit.com/images/product/paan-maghai.jpg',
    stock: 150,
  },
  {
    name: 'Paan Masala Mix (Sachets, 10-Pack)',
    price: 120,
    category: 'Paan Corner',
    image: 'https://blinkit.com/images/product/paan-masala.jpg',
    stock: 300,
  },
  {
    name: 'Gulkand (Rose Petal Jam) 500g',
    price: 180,
    category: 'Paan Corner',
    image: 'https://blinkit.com/images/product/gulkand.jpg',
    stock: 80,
  },
  // ====================================================================
  // 7. BAKERY CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Whole Wheat Bread',
    price: 40,
    category: 'Bakery & Biscuits',
    image: 'https://blinkit.com/images/product/bread.jpg',
    stock: 50,
  },
  {
    name: 'White Sandwich Bread',
    price: 35,
    category: 'Bakery & Biscuits',
    image: 'https://blinkit.com/images/product/white-bread.jpg',
    stock: 70,
  },
  {
    name: 'Croissants (Pack of 4)',
    price: 110,
    category: 'Bakery & Biscuits',
    image: 'https://blinkit.com/images/product/croissants.jpg',
    stock: 30,
  },
  {
    name: 'Chocolate Chip Cookies (150g)',
    price: 85,
    category: 'Bakery & Biscuits',
    image: 'https://blinkit.com/images/product/choc-cookies.jpg',
    stock: 90,
  },
  {
    name: 'Oatmeal Raisin Biscuits (200g)',
    price: 70,
    category: 'Bakery & Biscuits',
    image: 'https://blinkit.com/images/product/oatmeal-biscuits.jpg',
    stock: 65,
  },
  // ====================================================================
  // 8. Pet Supplies CATEGORY (5 Products)
  // ====================================================================
  {
    name: 'Adult Dog Dry Food (2kg)',
    price: 750,
    category: 'Pet Supplies',
    image: 'https://blinkit.com/images/product/dog-food-dry.jpg',
    stock: 80,
  },
  {
    name: 'Clumping Cat Litter (5kg)',
    price: 400,
    category: 'Pet Supplies',
    image: 'https://blinkit.com/images/product/cat-litter.jpg',
    stock: 60,
  },
  {
    name: 'Dog & Cat Shampoo (300ml)',
    price: 250,
    category: 'Pet Supplies',
    image: 'https://blinkit.com/images/product/pet-shampoo.jpg',
    stock: 100,
  },
  {
    name: 'Durable Chew Toy (Medium)',
    price: 180,
    category: 'Pet Supplies',
    image: 'https://blinkit.com/images/product/chew-toy.jpg',
    stock: 120,
  },
  {
    name: 'Premium Bird Seed Mix (1kg)',
    price: 120,
    category: 'Pet Supplies',
    image: 'https://blinkit.com/images/product/bird-seed.jpg',
    stock: 90,
  },
  // ====================================================================
  // 9. Home and Kitchen (5 Products)
  // ====================================================================
  {
    name: 'Stainless Steel Water Bottle (1L)',
    price: 350,
    category: 'Home & Kitchen',
    image: 'https://blinkit.com/images/product/water-bottle-steel.jpg',
    stock: 150
  },
  {
    name: 'Non-Stick Frying Pan (24cm)',
    price: 899,
    category: 'Home & Kitchen',
    image: 'https://blinkit.com/images/product/frying-pan-nonstick.jpg',
    stock: 70
  },
  {
    name: 'Microfiber Cleaning Cloth Set (5 Pcs)',
    price: 120,
    category: 'Home & Kitchen',
    image: 'https://blinkit.com/images/product/microfiber-cloths.jpg',
    stock: 200
  },
  {
    name: 'Liquid Dishwash Gel (750ml)',
    price: 180,
    category: 'Home & Kitchen',
    image: 'https://blinkit.com/images/product/dishwash-gel.jpg',
    stock: 130
  },
  {
    name: 'All-Purpose Kitchen Scissors',
    price: 90,
    category: 'Home & Kitchen',
    image: 'https://blinkit.com/images/product/kitchen-scissors.jpg',
    stock: 100
  },
  // ====================================================================
  // 9. Baby Care (5 Products)
  // ====================================================================
  {
    name: 'Gentle Baby Diapers (Pack of 50)',
    price: 699,
    category: 'Baby Care',
    image: 'https://blinkit.com/images/product/baby-diapers.jpg',
    stock: 120
  },
  {
    name: 'Tear-Free Baby Shampoo & Wash (200ml)',
    price: 250,
    category: 'Baby Care',
    image: 'https://blinkit.com/images/product/baby-wash.jpg',
    stock: 80
  },
  {
    name: 'Sensitive Baby Water Wipes (Pack of 72)',
    price: 130,
    category: 'Baby Care',
    image: 'https://blinkit.com/images/product/baby-wipes.jpg',
    stock: 150
  },
  {
    name: 'Diaper Rash Cream (50g)',
    price: 199,
    category: 'Baby Care',
    image: 'https://blinkit.com/images/product/diaper-rash-cream.jpg',
    stock: 90
  },
  {
    name: 'Talc-Free Baby Powder (100g)',
    price: 110,
    category: 'Baby Care',
    image: 'https://blinkit.com/images/product/baby-powder.jpg',
    stock: 110
  },
  // ====================================================================
  // 10. Pharmacy (5 Products)
  // ====================================================================
  {
    name: 'Paracetamol Pain Relief Tablets (Strip of 10)',
    price: 35,
    category: 'Pharmacy',
    image: 'https://blinkit.com/images/product/paracetamol.jpg',
    stock: 200
  },
  {
    name: 'Antiseptic Liquid (100ml)',
    price: 110,
    category: 'Pharmacy',
    image: 'https://blinkit.com/images/product/antiseptic-liquid.jpg',
    stock: 150
  },
  {
    name: 'Vitamin C Chewable Tablets (Bottle of 60)',
    price: 299,
    category: 'Pharmacy',
    image: 'https://blinkit.com/images/product/vitamin-c.jpg',
    stock: 80
  },
  {
    name: 'Digestive Antacid Syrup (170ml)',
    price: 95,
    category: 'Pharmacy',
    image: 'https://blinkit.com/images/product/antacid-syrup.jpg',
    stock: 120
  },
  {
    name: 'Digital Fever Thermometer',
    price: 199,
    category: 'Pharmacy',
    image: 'https://blinkit.com/images/product/thermometer.jpg',
    stock: 100
  },
];

// Function to connect to DB and insert data
const seedDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    // The connection URI is now handled by the server or an env var passed to this script
    await mongoose.connect(process.env.MONGO_URI); 

    // 1. Clear existing products
    await Product.deleteMany({});
    console.log('Existing products cleared.');

    // 2. Insert new seed products
    await Product.insertMany(products);
    console.log(`Database seeded successfully with ${products.length} products!`);
    
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1); // Exit with an error code
  } finally {
    // 3. Close the connection
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
};

// Check if the script is being run directly
if (require.main === module) {
  seedDB();
}