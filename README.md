# Blinkit-Website-using-React-and-Nodejs

This project is a **full-stack quick commerce (instant delivery) application** built using the **MERN (MongoDB, Express, React, Node.js)** stack. It is designed to emulate the core functionalities of platforms like Blinkit, focusing on real-time delivery, hyperlocal inventory management, and role-based access for different user types.

***

## 💡 Key Features

The application incorporates complex logic essential for a modern quick commerce system:

* **🗺️ Geo-Spatial Vendor Selection:** The backend uses MongoDB's **2dsphere index** and `$near` queries to find the **closest vendors** to a user's location, ensuring ultra-fast delivery feasibility. 
* **🔒 Role-Based Access Control (RBAC):** Implements secure authentication using **JWTs** with distinct roles (`user`, `vendor`, `admin`) to control access to specific dashboards and protected API routes.
* **📈 Real-Time Order Tracking:** Utilizes **Socket.IO** for live updates on order status (e.g., Placed, Acknowledged, Dispatched, Delivered) in the `OrderTracking` component.
* **📦 Hyper-Local Inventory:** Products are linked to a specific vendor, enabling accurate stock tracking and geo-filtered product listing based on the user's nearest active store.
* **🛒 Redux Cart Management:** Implements efficient global state management using **Redux Toolkit** for the shopping cart.
* **⚙️ Admin/Vendor Dashboards:** Dedicated interfaces for vendor store registration (including geo-coordinates) and admin bulk product management.

***

## 🛠️ Project Structure and Dependencies

The project is structured into two main directories: **Backend** (Node.js/Express) and **Frontend** (React/Vite).

### 1. Backend (Server) Setup

The Express server handles all business logic, database interaction, API routing, and real-time order updates.

| File/Directory | Description |
| :--- | :--- |
| `server.js` | Main entry file; handles DB connection, middleware, and route integration. |
| `authenticate.js` | Middleware to verify JWT and check user `role` for RBAC. |
| `adminRoutes.js` | Secured routes for admin tasks (e.g., bulk product upload). |
| `productRoutes.js` | Public routes for product listing, search, and category filtering. |
| `vendorRoutes.js` | Handles **geospatial queries** (`/nearby`) and vendor store setup (`/store`). |
| `User.js` | Mongoose schema with `email`, `password` (hashed), and `role`. |
| `Vendor.js` | Vendor schema with GeoJSON `location` coordinates for geospatial indexing. |
| `Product.js` | Product schema with `name`, `price`, `category`, `stock`, and `vendorId`. |
| `Order.js` | Order schema for tracking purchases and `status`. |
| `seed.js` | Script to populate the database with mock data. |
| `.env` | Stores sensitive configurations like `MONGO_URI` and `JWT_SECRET`. |

#### Server Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`express`** | Web framework. |
| **`mongoose`** | MongoDB ODM. |
| **`socket.io`** | Real-time communication for order updates. |
| **`jsonwebtoken`** | JWT for auth. |
| **`bcryptjs`** | Password hashing. |
| **`multer` / `xlsx`** | Handling file uploads (e.g., bulk product spreadsheets). |

***

### 2. Frontend (Client) Setup

The React application, built with Vite, manages the UI and communicates with the API endpoints.

| File/Directory | Description |
| :--- | :--- |
| `App.jsx` | Main router, defining all application routes. |
| `Header.jsx`, `Footer.jsx` | Layout components. |
| `HomePage.jsx` | Product listing, search, and category filtering logic. |
| `ProductDetails.jsx` | Displays single product information. |
| `Cart.jsx` | Handles cart view, checkout, and **geo-location check**. |
| `OrderTracking.jsx` | Listens for **Socket.IO** events for real-time status. |
| `Login.jsx` / `Register.jsx` | User authentication components. |
| `AdminDashboard.jsx` / `VendorDashboard.jsx` | Role-specific interfaces. |
| `OrderHistory.jsx`, `UserAccount.jsx` | User profile management. |
| `AboutUs.jsx`, `FAQ.jsx`, `Policy.jsx`, etc. | Informational and legal pages. |
| **`css/` directory** | Contains all component-specific styling files (see table below). |
| `.env` | Stores the API base URL (`VITE_APP_API_URL`). |

#### Frontend Styling Files (`./css` directory)

All major styling is component-scoped, following this structure:

| File Name | Styled Components | Purpose |
| :--- | :--- | :--- |
| **`Auth.css`** | `Login.jsx`, `Register.jsx` | Styling for authentication forms and containers. |
| **`Dashboard.css`** | `UserAccount.jsx`, `OrderHistory.jsx`, `VendorDashboard.jsx` | Shared styling for all account/dashboard interfaces. |
| **`Header.css`** | `Header.jsx` | Styling for the main navigation, cart icon, and user dropdown. |
| **`Footer.css`** | `Footer.jsx` | Styling for the footer and newsletter section. |
| **`HomePage.css`** | `HomePage.jsx` | Styling for the product grid, banners, search, and category bar. |
| **`ProductDetails.css`** | `ProductDetails.jsx` | Styling for the single product view and specifications. |
| **`Cart.css`** | `Cart.jsx` | Styling for the cart summary, item list, and checkout. |
| **`OrderTracking.css`** | `OrderTracking.jsx` | Styling for the real-time order status visualizer. |
| **`AdminDashboard.css`** | `AdminDashboard.jsx` | Unique styling for the admin panel elements (e.g., bulk upload card). |
| **`AboutUs.css`, `FAQ.css`, `Policy.css`, `Terms.css`, `ContactUs.css`, `Careers.css`** | Corresponding Pages | Styling for informational and legal content pages. |

#### Client Dependencies

| Dependency | Purpose |
| :--- | :--- |
| **`react-router-dom`** | Client-side routing. |
| **`reduxjs/toolkit` / `react-redux`** | Global state management. |
| **`axios`** | HTTP client for API requests. |
| **`socket.io-client`** | Connects to the real-time server. |

***

## 🚀 Getting Started

You will need **Node.js**, **npm**, and a running **MongoDB instance** (local or hosted) to set up and run this project.

### 1. Backend (Server) Setup

1.  **Navigate** to the server directory:
    ```bash
    cd server
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    Create a **`.env`** file in the server root and populate it with your configuration:

    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/blinkit_clone
    JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
    FRONTEND_URL=http://localhost:5173
    ```

4.  **Seed the Database (Optional but Recommended):**
    Run the `seed.js` script to populate the database with initial products and vendors for testing.

    ```bash
    node seed.js
    ```

5.  **Start the Server:** The API will run on `http://localhost:5000`.

    ```bash
    node server.js
    ```

***

### 2. Frontend (Client) Setup

1.  **Navigate** to the client directory:
    ```bash
    cd client
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    Ensure your client `.env` file (e.g., `client/.env`) is configured correctly to point to the backend:

    ```bash
    VITE_APP_API_URL=http://localhost:5000
    ```

4.  **Start the Client:** The application will typically open in your browser on `http://localhost:5173`.

    ```bash
    npm run dev
    ```

> 🔔 **Note:** Both the backend server and frontend client must be running **concurrently** in two separate terminal windows for the full application to function.
