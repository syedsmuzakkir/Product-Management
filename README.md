<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# Product Management Application


This is a React application that displays products and allows users to filter products by category and search queries. It features a sidebar to navigate through categories and subcategories, and a main content area to view products.

# Features

Category and Subcategory Navigation: View and filter products by selecting categories and subcategories.
Product Search: Search for products by title or description.
Responsive Design: Fixed sidebar for easy navigation and a responsive product table.

### Technologies Used
React: JavaScript library for building user interfaces.
TypeScript: Static type checking for JavaScript.
CSS: Styling for the user interface.

### Getting Started

To get started with this project, follow these steps:

# Prerequisites


# Make sure you have the following installed:

Node.js (version 14 or higher)
npm (comes with Node.js)
Installation
Clone the repository:

# Prerequisites


###  git clone https://github.com/yourusername/product-management-app.git
Navigate to the project directory:


cd product-management-app

### Install dependencies:


npm install

### Running the Application

#### To start the application, run:


npm start / npm run dev 

This will start the development server and open the application in your default web browser. 

The app will be accessible at http://localhost:3000.

# Build for Production

To build the application for production, run:

# bash

npm run build

This will create a build directory with optimized production files.

# Directory Structure

/src: Contains the source code.
/components: React components (e.g., Sidebar, ProductList).
/services: API service for fetching products (productServices.ts).
App.tsx: Main component that renders Sidebar and ProductList.
index.tsx: Entry point of the application.
public: Public assets and HTML template.

# API

The application fetches product data from the DummyJSON API. Adjust the fetchProducts function in productServices.ts if using a different API or structure.

# Contributing


Feel free to open issues or submit pull requests to contribute to the project.

# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
For any questions or feedback, you can reach me at syedsmuzakkir46@gmail.com.
Github username (syedsmuzakkir)
>>>>>>> 09b2617b2307554ae4e6651d036decae8f664cb9
