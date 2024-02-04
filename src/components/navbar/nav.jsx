import "./nav.css";
import React, { createContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { apiD } from "../../context/data";
import { CartContext } from "../../context/cart-context";
import { SearchProduct } from "../../context/search-context/search";

function Navbar() {
	const con = useContext(apiD);
	const { cartCounter, counterState, setCartCounter } = useContext(CartContext);

	const { data, updateData } = useContext(SearchProduct);
	const [searchQuery, setSearchQuery] = useState("");

	function search() {
		const value = searchQuery.toLowerCase();
		const filtered = con.data.filter((product) => {
			return (
				product.title.toLowerCase().includes(value) ||
				product.category.toLowerCase().includes(value)
			);
		});

		updateData(filtered);
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			search();
		}
	};

	const setSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className="barr">
			<div className="mainNav ">
				<div className="es">
					<Link to={"e-commerce-project/"} className="l1">
						<img
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/shopping-and-ecommerce29.png"
							alt=""
							className="logo"
						/>
						<span className="e">E</span>-Shop
					</Link>
				</div>
				<div className="search">
					<input
						type="text"
						placeholder="search products by name or category...."
						className="bar w-11/12 m-2 appearance-none border-none bg-transparent focus:outline-none"
						onChange={setSearch}
						onKeyDown={handleKeyDown}
					/>
					<button className="searchB" onClick={search}>
						<Link
							to={{
								pathname: "e-commerce-project/search",
							}}>
							<img
								src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/pngwing.com.png"
								className="searchi"
								alt=""
							/>
						</Link>
					</button>
				</div>
				<div className="cart">
					<Link to={"e-commerce-project/cart"}>
						<img
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/shopping-cart.png"
							className="cPng"
							alt=""
						/>

						<span className={cartCounter == 0 ? "n" : "cart-counter"}>
							{cartCounter}
						</span>
					</Link>
				</div>
			</div>
			<div className="secBar">
				<div className="cats1">
					<ul className="cats">
						<li>
							<Link to={"e-commerce-project/products"} className="l">
								Products
							</Link>
						</li>
						<li>
							{" "}
							<Link to={"e-commerce-project/men"} className="l">
								Men's Clothing
							</Link>
						</li>
						<li>
							<Link to={"e-commerce-project/women"} className="l">
								Women's Clothing
							</Link>
						</li>
						<li>
							<Link to={"e-commerce-project/tech"} className="l">
								Electronics
							</Link>
						</li>
						<li>
							<Link to={"e-commerce-project/jewelery"} className="l">
								Jewelery
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export { Navbar };
