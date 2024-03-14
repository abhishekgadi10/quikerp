# QuickERP - Simplified ERP System with React

Welcome to QuickERP, a simplified interface for managing basic business operations efficiently. This application is built using React, designed to provide a user-friendly experience for managing key aspects of a business such as product listings and orders.Below, you'll find instructions on how to set up and use the application. 

The website is hosted on -[QuikERP](https://quikerp.netlify.app/)
## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [About the application](#about-the-application)
- [Project Strcture](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Screenshots](#screenshots)


## Quick Start

To get started with QuickERP, follow these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abhishekgadi10/quikerp.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd quikerp
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open your browser and visit [http://localhost:3000](http://localhost:3000)**

## Features

QuickERP offers the following features:

- **Dashboard:**
  - Provides an overview of key metrics and features.
  - Quick navigation links to Products and Orders management pages.

- **Products Management:**
  - View a list of products with details such as name, category, price, and stock quantity.
  - Add, edit, and delete products.

- **Orders Management:**
  - View a list of orders with details like order ID, customer name, order date, and status.
  - View order details, update order status, and delete orders.

- **Orders Calendar View:**
  - Calendar interface displaying orders based on expected delivery dates.
  - Click on a date to view orders due for delivery that day.

## About the application

QuickERP comes with a range of features to enhance your experience:

- **App Header:** Featuring a logo, name, and notification icons for quick access to important information.

- **App Footer:** Providing static links for easy navigation within the application.

- **App Sidebar:** Utilizing react-router-dom for seamless page routing within the application.

- **API Integration:** Incorporating API integration to fetch data from the server, ensuring up-to-date information.

- **Dashboard Page:** Offering comprehensive statistics cards, recent orders, and a revenue chart powered by ChartJS for insightful data visualization.

- **Table Pages:** Including various table pages such as Products, Orders, and Customers lists for efficient data management.

- **Notifications and Comments Drawer:** Accessible from the header, allowing users to view and interact with notifications and comments seamlessly.



## Project Structure

The project structure is organized as follows:

```
.github/
  └─ workflows/                 # GitHub Actions workflows (if needed)
node_modules/                   # Node.js dependencies (ignored in .gitignore)
public/                         # Public files (e.g., static assets)
src/                            # Source code
  └─ API/                       # API related files
  └─ Components/                # Reusable components
    └─ AppFooter/               # Footer component
    └─ AppHeader/               # Header component
    └─ AppRoutes/               # Routes component
    └─ PageContent/             # Page content component
    └─ SideMenu/                # Side menu component
  └─ Pages/                     # Pages of the application
    └─ Customers/               # Customers page
    └─ Dashboard/               # Dashboard page
    └─ Inventory/               # Inventory page
    └─ Orders/                  # Orders page
.env                            # Environment variables (ignored in .gitignore)
App.css                         # Main CSS file
App.js                          # Main JavaScript file (entry point)
App.test.js                     # Test file for the main App component
index.css                       # CSS file for index.html
index.js                        # JavaScript file for index.html (entry point)
logo.svg                        # Logo file
reportWebVitals.js              # Web Vitals reporting file
setupTests.js                   # Setup file for Jest tests
.gitignore                      # Git ignore file
package-lock.json               # Lock file for Node.js dependencies

```

## Dependencies

QuickERP utilizes the following dependencies:

- `react`: A JavaScript library for building user interfaces.
- `react-router-dom`: DOM bindings for React Router, allowing navigation between different sections.
- `react-calendar`: A responsive and modular calendar component for React.
- `react-icons`: A collection of popular icons as React components.
- `antd`: A design system for enterprise-level products. It provides a set of high-quality React components out of the box.

## Usage

Once the development server is running, you can navigate through the different sections of the application using side navigation menu.

To manage products, click on the "Products" link in the side navigation menu. Here you can view, add, edit, and delete products.

Similarly, to manage orders, click on the "Orders" link in the side navigation menu. You can view order details, update order status, and delete orders if required.

The optional calendar view feature is implemented, you can access it through the side navigation menu. The calendar will display orders based on their expected delivery dates, and you can click on specific dates to view the corresponding orders.

## Screenshots
![image](https://github.com/abhishekgadi10/quikerp/assets/94633826/cc202e42-d68b-4ff9-b170-39e0a6703b9e)


![Screenshot (189)](https://github.com/abhishekgadi10/quikerp/assets/94633826/58ffe236-c92c-4ab7-84f7-edaf5459570b)

![Screenshot (190)](https://github.com/abhishekgadi10/quikerp/assets/94633826/255fd012-ce4f-4ca1-a972-3364a653672a)

![Screenshot (191)](https://github.com/abhishekgadi10/quikerp/assets/94633826/e78b2fd9-5d79-4349-8cb9-4edb7126c974)

![Screenshot (192)](https://github.com/abhishekgadi10/quikerp/assets/94633826/57306267-dace-42cc-a2ae-aef7a439f9d3)

![Screenshot (193)](https://github.com/abhishekgadi10/quikerp/assets/94633826/ae3113d8-82ec-40be-b0ff-9c080d35fe22)

![Screenshot (194)](https://github.com/abhishekgadi10/quikerp/assets/94633826/f2faf69d-76fa-4501-8685-d528942ea362)

![Screenshot (195)](https://github.com/abhishekgadi10/quikerp/assets/94633826/53fbb92f-f275-4501-8046-31effcbdd4a8)

![Screenshot (196)](https://github.com/abhishekgadi10/quikerp/assets/94633826/ccc2bd6d-7684-44f9-9b04-0fd9bcb0ebde)

![Screenshot (197)](https://github.com/abhishekgadi10/quikerp/assets/94633826/342dad82-ef48-4bd2-887c-c10b267cf0be)

![Screenshot (198)](https://github.com/abhishekgadi10/quikerp/assets/94633826/f14a6553-4abd-4c79-9b84-f590f7e3c921)


