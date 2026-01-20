# 🛒 Simple E-Commerce Website (Next.js 15/16 App Router)

## 📌 Project Name
Simple E-Commerce Website

---

## 🎯 Purpose
This project is a **simple e-commerce web application** built using **Next.js 15/16 (App Router)**.  
The main goal is to demonstrate core Next.js concepts such as routing, layouts, data fetching, authentication, and protected routes.

The application allows users to browse products publicly, while authenticated users can add new products.

---

## 🌐 Live Site
Live URL: http://localhost:3000

---

## 👥 User Roles

### Admin
- Login using mock credentials
- Add new products
- Access protected routes
- Manage personal session via cookies

### Public User
- View landing page
- Browse product list
- View product details

---

## ✨ Key Features
- Landing page with multiple sections
- Product listing from local JSON file
- Product details page
- Mock authentication system
- Cookie-based authentication
- Protected routes with redirection
- Add product functionality (authenticated only)
- Responsive UI with Tailwind CSS
- Hover effects and smooth transitions

---

## 🔐 Authentication
- Mock login credentials:
  - **Email:** admin@example.com
  - **Password:** 123456
- Authentication handled using **cookies**
- Protected routes redirect unauthenticated users to the login page

---

## 🧑‍💻 Tech Stack
- Next.js 15/16 (App Router)
- React
- Tailwind CSS
- Cookie-based authentication
- Local JSON file for data storage

---

## 📦 npm Packages Used
- next
- react
- react-dom
- tailwindcss
- postcss
- autoprefixer
- js-cookie

---  

## Setup Instructions

1. Clone the client repository  
   git clone https://github.com/your-username/NextShop.git

2. Navigate to the project directory  
   cd next-shop

3. Install all dependencies  
   npm install

4. Run the development server  
   npm run dev

5. Open the project in your browser  
   http://localhost:3000
