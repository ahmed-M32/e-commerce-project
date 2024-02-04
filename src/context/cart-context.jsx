import React, { Children } from "react";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartCounter, setCartCounter] = useState(JSON.parse(localStorage.getItem('cart')).length);

	let defaultState = "n"	
	if(cartCounter == null || cartCounter == 0){
		defaultState = "n"
	} else{
		defaultState = "cart-counter"
	}

	const updateCart = (item) => {
		if (cartItems.length == 0) {
			setCartItems([item]);
		} else {
			setCartItems([...cartItems, item]);
		}
	};

	const updateCounter = () => {
		
		if (localStorage.getItem("cart")) {
			let count = JSON.parse(localStorage.getItem("cart")).length;
			setCartCounter(count)
		}
	};
	const addToLocalStorage = (item) => {
		if (localStorage.getItem("cart")) {
			let localStorageItems = JSON.parse(localStorage.getItem("cart"));
			updateCounter((prev) => prev + 1);
			localStorageItems.push(item);
			setCartItems(localStorageItems);
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
		updateCounter,
		cartCounter,
		setCartCounter,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
};

export { CartContext, CartContextProvider };
