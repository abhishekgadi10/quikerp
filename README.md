# QuickERP - Simplified ERP System with React

Welcome to QuickERP, a simplified interface for managing basic business operations efficiently. This application is built using React, designed to provide a user-friendly experience for managing key aspects of a business such as product listings and orders. 


## Table of Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [About the application](#about-the-application)
- [Project Strcture](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

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

- **Miscellaneous Functions:** Implementing various other functions to enhance the usability and functionality of the admin dashboard portal.


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

Once the development server is running, you can navigate through the different sections of the application using the provided links in the navigation bar.

To manage products, click on the "Products" link in the navigation bar. Here you can view, add, edit, and delete products.

Similarly, to manage orders, click on the "Orders" link in the navigation bar. You can view order details, update order status, and delete orders if required.

If the optional calendar view feature is implemented, you can access it through the navigation bar. The calendar will display orders based on their expected delivery dates, and you can click on specific dates to view the corresponding orders.

## Screenshots


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
