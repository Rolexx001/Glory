# 🎒 Glory - Premium Bag Store

A full-stack E-commerce web application designed for a premium shopping experience. Built with the **MERN** stack (focusing on EJS for rendering), this project features a sleek, modern UI, dynamic product management, and a robust cart system.

---

## 🚀 Key Features

* **Elegant Product Grid:** Responsive shop page with dynamic background colors for each product.
* **Smart Cart System:** Add/Remove functionality with real-time price and discount calculations.
* **Administrative Controls:** Dedicated owner/admin panel to add new products and manage inventory.
* **User Authentication:** Secure login and signup flows to protect user data and orders.
* **Dynamic Filtering:** Sort products by popularity or newest arrivals.
* **Flash Messages:** Integrated `connect-flash` for real-time user feedback (e.g., "Product added to cart").
* **Optimized UI:** Built with **Tailwind CSS** for a fast, mobile-responsive, and modern aesthetic.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Frontend:** EJS (Embedded JavaScript), Tailwind CSS
* **Session Management:** Express-Session, Cookie-parser
* **Middleware:** Multer (File Uploads), Connect-flash

---

## 📂 Project Structure

```text
Glory/
├── config/             # Mongoose & Database connection
├── models/             # User, Product, and Owner schemas
├── public/             # Static files (CSS, Images, JS)
├── routes/             # Express routers (index, users, owners, products)
├── views/              # EJS templates (shop, cart, login, etc.)
└── app.js              # Application entry point
