import React, { useState } from "react";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import "./cart.css";
import { Link } from "react-router-dom";
import Product from "../../products call/products";
const Cart = () => {
	const { updateCart, cartItems } = useContext(CartContext);
	const [item, setItems] = useState([]);
	const [counter, setCounter] = useState();
	const change = (s) => {
		setItems(s);
	};
	useEffect(() => {
		if (localStorage.getItem("cart")) {
			let getLocalStorageItems = JSON.parse(localStorage.getItem("cart"));
			change(getLocalStorageItems);
		}
	}, []);
	const countItems = (items) => {
		const filteredArray = item.filter((e) => {
			return e.title == items.title;
		});

		return filteredArray.length;
	};


	function increment(){

	}
	function decrement(){

	}

	let obj = {};
	let unique = {};
	let uniqueA = [];

	for (let i = 0; i < item.length; i++) {
		obj[item[i].title] = countItems(item[i]);
	}

	for (let i = 0; i < item.length; i++) {
		let objtitle = item[i].title;
		unique[objtitle] = item[i];
	}
	for (let i in unique) {
		uniqueA.push(unique[i]);
	}
	console.log(uniqueA);
	return (
		<div className="cart-grid grid w-full">
			{uniqueA.map((product) => {
				return (
					<div className="p" >
						<div className="cartr">
							{" "}
						<Link to ={`/e-commerce-project/products/${product.id}`}>

							<img src={`${product.image}`} alt=""className=" cart-img" />
						</Link>

						</div>
						<div className="titlee"> {product.title}</div>
						<div className="cart-price">price : ${product.price}</div>
						<button className="add b" onClick={increment}>+</button>
						<div className="quantity"> quantity : {obj[product.title]}</div>
						<button className="minus b" onClick={decrement}>-</button>
					</div>
				);
			})}
		</div>
	);
};
export default Cart;
