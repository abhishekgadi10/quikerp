// export const getOrders = () => {
//   return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
// };

// export const getRevenue = () => {
//   return fetch("https://dummyjson.com/carts").then((res) => res.json());
// };

// export const getInventory = () => {
//   return fetch("https://dummyjson.com/products").then((res) => res.json());
// };

// export const getCustomers = () => {
//   return fetch("https://dummyjson.com/users").then((res) => res.json());
// };

// export const getComments = () => {
//   return fetch("https://dummyjson.com/comments").then((res) => res.json());
// };

// export const addProduct = (productData) => {
//   return fetch("https://dummyjson.com/products", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   }).then((res) => res.json());
// };

// export const editProduct = (productId, productData) => {
//   return fetch(`https://dummyjson.com/products/${productId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   }).then((res) => res.json());
// };

// export const deleteProduct = (productId) => {
//   return fetch(`https://dummyjson.com/products/${productId}`, {
//     method: "DELETE",
//   }).then((res) => res.json());
// };
















// In your API file (../../API)
export const getCustomersByIds = (customerIds) => {
    // Dummy implementation, replace it with your actual logic
    return Promise.resolve([]);
  };
  
  export const getOrders = () => {
    // Your existing implementation
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    // Your existing implementation
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = () => {
    // Your existing implementation
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getCustomers = () => {
    // Your existing implementation
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  
  export const getComments = () => {
    // Your existing implementation
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };
  
  export const addProduct = (productData) => {
    // Your existing implementation
    return fetch("https://dummyjson.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => res.json());
  };
  
  export const editProduct = (productId, productData) => {
    // Your existing implementation
    return fetch(`https://dummyjson.com/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => res.json());
  };
  
  export const deleteProduct = (productId) => {
    // Your existing implementation
    return fetch(`https://dummyjson.com/products/${productId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  