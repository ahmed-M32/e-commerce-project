import React, { useState } from "react";
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
	const { updateCart, cartItems } = useContext(CartContext);
	const [item, setItems] = useState([]);
	const [prices, setPrice] = useState(0);

	const CartItem = (props) => {
		const { img, title, id, price, obj, product1, func } = props;

		const [counter, setCounter] = useState(obj);

		function increment() {
			let arr = JSON.parse(localStorage.getItem("cart"));
			arr.push(product1);

			setPrice((prev) => Math.round(((prev + price) * 100) )/100);

			func(arr);
			localStorage.setItem("cart", JSON.stringify(arr));
		}

		function decrement() {
			let arr = JSON.parse(localStorage.getItem("cart"));
			let index = -1;

			if (item.length == 0) {
				setPrice(0);
			}
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].title === title) {
					index = i;
					break;
				}
			}
			if (index != -1) {
				arr.splice(index, 1);

				setPrice((prev) => Math.round(((prev - price) * 100) )/100);

				func(arr);

				localStorage.setItem("cart", JSON.stringify(arr));
			}
		}

		return (
			<div className="p">
				<div className="cartr">
					{" "}
					<Link to={`/e-commerce-project/products/${id}`}>
						<img src={img} alt="" className=" cart-img" />
					</Link>
				</div>
				<div className="titlee"> {title}</div>
				<div className="cart-price">price : ${price}</div>
				<button className="add-button" onClick={increment}>
					+
				</button>
				<div className="quantity"> quantity : {counter}</div>
				<button className="remove-button" onClick={decrement}>
					-
				</button>
			</div>
		);
	};

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			let getLocalStorageItems = JSON.parse(localStorage.getItem("cart"));
			setItems(getLocalStorageItems);
			let totalPrice = 0;
			getLocalStorageItems.forEach((product) => {
				totalPrice += product.price;
			});
			setPrice(totalPrice);
		}
	}, []);

	const countItems = (items) => {
		const filteredArray = item.filter((e) => {
			return e.title == items.title;
		});

		return filteredArray.length;
	};
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

	return (
		<div className="main-cart ">
			<div className="cart-grid grid w-full">
				{uniqueA.map((product) => {
					return (
						<CartItem
							img={product.image}
							title={product.title}
							id={product.id}
							price={product.price}
							obj={obj[product.title]}
							product1={product}
							func={setItems}></CartItem>
					);
				})}
			</div>
			<div className="total">
				<div className="total-items">
					<span className="main-title"> Total items </span>

					<div>
						total price:
						{prices}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cart;
