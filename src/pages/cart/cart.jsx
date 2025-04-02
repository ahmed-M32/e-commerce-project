import React, { useState, useContext, useEffect } from "react";
import { FaRegTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";

const CartItem = ({ img, title, id, price, quantity, product, onQuantityChange, onDelete }) => {
	return (
		<div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
			<Link 
				to={`/e-commerce-project/products/${id}`}
				className="relative w-24 h-24 sm:w-32 sm:h-32 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0"
			>
				<img 
					src={img} 
					alt={title} 
					className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
				/>
			</Link>
			
			<div className="flex-1 min-w-0">
				<h3 className="text-sm font-medium text-gray-900 truncate">
					{title}
				</h3>
				<p className="mt-1 text-sm text-gray-500">
					${price}
				</p>
				
				<div className="mt-4 flex items-center gap-4">
					<div className="flex items-center rounded-lg border border-gray-200">
						<button
							onClick={() => onQuantityChange(product, "decrement")}
							className="p-2 hover:bg-gray-50 transition-colors"
							aria-label="Decrease quantity"
						>
							<FaMinus className="w-4 h-4 text-gray-400" />
						</button>
						<span className="px-4 py-2 text-sm font-medium text-gray-900">
							{quantity}
						</span>
						<button
							onClick={() => onQuantityChange(product, "increment")}
							className="p-2 hover:bg-gray-50 transition-colors"
							aria-label="Increase quantity"
						>
							<FaPlus className="w-4 h-4 text-gray-400" />
						</button>
					</div>
					
					<button
						onClick={() => onDelete(product)}
						className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
						aria-label="Remove item"
					>
						<FaRegTrashAlt className="w-4 h-4" />
					</button>
				</div>
			</div>
			
			<div className="text-right">
				<p className="text-sm font-medium text-gray-900">
					${(price * quantity).toFixed(2)}
				</p>
			</div>
		</div>
	);
};

const Cart = () => {
	const { setCartCounter, setCounterState } = useContext(CartContext);
	const [items, setItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			const cartItems = JSON.parse(localStorage.getItem("cart"));
			setItems(cartItems);
			updateTotalPrice(cartItems);
			setCartCounter(cartItems.length);
		}
	}, []);

	const updateTotalPrice = (cartItems) => {
		const total = cartItems.reduce((sum, item) => sum + item.price, 0);
		setTotalPrice(Math.round(total * 100) / 100);
	};

	const handleQuantityChange = (product, action) => {
		const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
		
		if (action === "increment") {
			cartItems.push(product);
			toast.success("Item quantity increased");
		} else {
			const index = cartItems.findIndex(item => item.title === product.title);
			if (index !== -1) {
				cartItems.splice(index, 1);
				toast("Item quantity decreased");
			}
		}

		localStorage.setItem("cart", JSON.stringify(cartItems));
		setItems(cartItems);
		updateTotalPrice(cartItems);
		setCartCounter(cartItems.length);
	};

	const handleDelete = (product) => {
		const cartItems = JSON.parse(localStorage.getItem("cart"));
		const updatedItems = cartItems.filter(item => item.title !== product.title);
		
		localStorage.setItem("cart", JSON.stringify(updatedItems));
		setItems(updatedItems);
		updateTotalPrice(updatedItems);
		setCartCounter(updatedItems.length);
		toast.warning("Item removed from cart");
	};

	const getItemQuantity = (title) => {
		return items.filter(item => item.title === title).length;
	};

	const uniqueItems = Object.values(
		items.reduce((acc, item) => {
			acc[item.title] = item;
			return acc;
		}, {})
	);

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			<Toaster position="top-center" richColors />
			
			<div className="max-w-4xl mx-auto">
				<h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
				
				<div className="space-y-4">
					{uniqueItems.map(item => (
						<CartItem
							key={item.id}
							img={item.image}
							title={item.title}
							id={item.id}
							price={item.price}
							quantity={getItemQuantity(item.title)}
							product={item}
							onQuantityChange={handleQuantityChange}
							onDelete={handleDelete}
						/>
					))}
				</div>

				{uniqueItems.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500">Your cart is empty</p>
						<Link
							to="/e-commerce-project/"
							className="mt-4 inline-block text-primary-600 hover:text-primary-500"
						>
							Continue Shopping
						</Link>
					</div>
				)}

				{uniqueItems.length > 0 && (
					<div className="mt-8 bg-white rounded-lg shadow-sm p-6">
						<h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
						
						<div className="space-y-2">
							{uniqueItems.map(item => (
								<div key={item.id} className="flex justify-between text-sm text-gray-600">
									<span>{getItemQuantity(item.title)} x {item.title}</span>
									<span>${(item.price * getItemQuantity(item.title)).toFixed(2)}</span>
								</div>
							))}
							
							<div className="border-t border-gray-200 pt-4 mt-4">
								<div className="flex justify-between">
									<span className="text-base font-medium text-gray-900">Total</span>
									<span className="text-base font-medium text-gray-900">
										${totalPrice.toFixed(2)}
									</span>
								</div>
							</div>
						</div>

						<button 
							className="mt-6 w-full bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors"
							onClick={() => toast.info("Checkout functionality coming soon!")}
						>
							Proceed to Checkout
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
