// "use client";
// import React, { createContext, useEffect, useState } from "react";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < 300 + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [all_products, setAll_Products] = useState([]);
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   useEffect(()=>{
//   const authToken = `${localStorage.getItem("auth-token")}`;
//     });

//     fetch("https://glow-server.onrender.com/allproducts")
//       .then((response) => response.json())
//       .then((data) => setAll_Products(data));

// fetch("https://glow-server.onrender.com/getcart", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "auth-token": authToken,
//     "Content-Type": "application/json",
//   },
//   body: "",
// })
//   .then((response) => response.json())
//   .then((data) => setCartItems(data));

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

//     fetch("https://glow-server.onrender.com/addtocart", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "auth-token": ${authToken},
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ itemId: itemId }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

//     if (authToken) {
//       fetch("https://glow-server.onrender.com/removefromcart", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "auth-token": ${authToken},
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ itemId: itemId }),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_products.find(
//           (product) => product.id === Number(item)
//         );
//         totalAmount += itemInfo.new_price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const contextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     all_products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

"use client";
import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_Products] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [authToken, setAuthToken] = useState("");

  fetch("https://glow-server.onrender.com/allproducts")
    .then((response) => response.json())
    .then((data) => setAll_Products(data));

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setAuthToken(token);

      fetch("https://glow-server.onrender.com/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []); // Empty dependency array to run once on mount

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    fetch("https://glow-server.onrender.com/addtocart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: itemId }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (authToken) {
      fetch("https://glow-server.onrender.com/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
