import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet'; // Import Leaflet for custom icon

// Fix for default Leaflet icon not showing up in Webpack/React environments
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const VendorMap = () => {
  const [vendors, setVendors] = useState([]);
  const API_URL = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        // Use the new API endpoint
        const response = await axios.get(`${API_URL}/api/vendor/all`);
        setVendors(response.data);
      } catch (error) {
        console.error('Failed to fetch vendor locations:', error);
      }
    };

    fetchVendors();
  }, [API_URL]);

  // Set the map's initial center point (e.g., center of your main service area)
  // This example uses a placeholder [latitude, longitude]
  const centerPosition = [28.7041, 77.1025]; // Example: New Delhi coordinates

  return (
    <div style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
        <MapContainer 
            center={centerPosition} 
            zoom={10} 
            scrollWheelZoom={false} 
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {vendors.map((vendor) => {
                // GeoJSON stores coordinates as [longitude, latitude], Leaflet needs [latitude, longitude]
                const [lng, lat] = vendor.location.coordinates;
                
                return (
                    <Marker key={vendor._id} position={[lat, lng]}>
                        <Popup>
                            **{vendor.storeName}**
                            <br />
                            Vendor Location
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    </div>
  );
};

export default VendorMap;