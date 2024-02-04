import React, { useState } from "react";
import { useContext, useRef, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../context/cart-context";
import "./cart.css";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Cart = () => {
	const { setCartCounter, setCounterState } = useContext(CartContext);
	const [item, setItems] = useState([]);
	const [prices, setPrice] = useState(0);

	const CartItem = (props) => {
		const { img, title, id, price, obj, product1, changeItems } = props;

		const [counter, setCounter] = useState(obj);

		function increment() {
			let arr = JSON.parse(localStorage.getItem("cart"));
			arr.push(product1);

			setPrice((prev) => Math.round((prev + price) * 100) / 100);
			setCartCounter((prev) => prev + 1);
			changeItems(arr);
			localStorage.setItem("cart", JSON.stringify(arr));
			toast.success("added an item");
		}

		function decrement() {
			toast("removed an item");
			let arr = JSON.parse(localStorage.getItem("cart"));
			let index = -1;

			if (item.length == 0) {
				setPrice(0);
				setCounterState("n");
			}
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].title === title) {
					index = i;
					break;
				}
			}
			if (index != -1) {
				arr.splice(index, 1);

				setPrice((prev) => Math.round((prev - price) * 100) / 100);
				setCartCounter((prev) => prev - 1);
				changeItems(arr);

				localStorage.setItem("cart", JSON.stringify(arr));
			}
		}

		function deleteItem() {
			let arr = JSON.parse(localStorage.getItem("cart"));
			toast.warning("deleted an item");

			let removedItem = arr.filter((items) => items.title !== title);
			localStorage.setItem("cart", JSON.stringify(removedItem));
			changeItems(removedItem);

			let diffrence = (item.length - removedItem.length) * price;
			setCartCounter((prev) => prev - (item.length - removedItem.length));
			setPrice((prev) => Math.round((prev - diffrence) * 100) / 100);
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
				<button className="delete" onClick={deleteItem}>
					remove
					<FaRegTrashAlt></FaRegTrashAlt>
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
			setCartCounter(getLocalStorageItems.length);
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
			<Toaster position="top-center" richColors></Toaster>

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
							changeItems={setItems}></CartItem>
					);
				})}
			</div>
			<div className="total">
				<div className="total-items">
					<span className="main-title"> Total items </span>
					<div className="item-view">
						{uniqueA.map((item)=>{
							return(<div className="check-out-item">
								{obj[item.title]} X {item.price}
							</div>)
						})}
					</div>
					<div className="check-section">
						<div className="total-price">total price: ${prices}</div>
						<div className="check-out">check out</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Cart;
