import React, { Children } from "react";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	

	const updateCart = (item) => {
		if (cartItems.length == 0) {
			setCartItems([item]);
		} else {
			setCartItems([...cartItems, item]);
		}
	};
	
	const addToLocalStorage = (item) => {
		if (localStorage.getItem("cart")) {
			let localStorageItems = JSON.parse(localStorage.getItem("cart"));
			localStorageItems.push(item);
			setCartItems(localStorageItems)
			upData(localStorageItems);
		} else {
			localStorage.setItem("cart", JSON.stringify([item]));
		}
	};
	const upData = (item) => {
		localStorage.setItem("cart", JSON.stringify(item));
	};

	const contextValue = {
		updateCart,
		cartItems,
		addToLocalStorage,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export { CartContext, CartContextProvider };
