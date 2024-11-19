# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Fake Store React Application

## Overview
This is a React-based e-commerce application that fetches product data from the Fake Store API and allows users to add products to a cart. Users can view the cart in a modal interface, remove products, and see the total count of items in the navbar.

## Technologies Used
- ReactJS
- Tailwind CSS for responsive design and styling
- JavaScript for functionality

## Features
- Display a list of products with images, title, price, and an "Add to Cart" button.
- Alert the user if they try to add the same product twice.
- Display the number of items in the cart in the navbar.
- Open a modal with cart details, including product title, price, and a "Remove" button.

## Instructions to Run the App
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fake-store-app.git

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

## API Used
```bash
https://fakestoreapi.com/
