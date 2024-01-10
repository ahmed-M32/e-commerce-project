import "./nav.css";
import React, { createContext } from "react";
import { Link } from "react-router-dom";
import SearchBarr from "../searchBar/searchBar";
import { useContext, useState } from "react";
import { apiD } from "../../context/data";

const searchProduct = createContext([]);

function Navbar(props) {
	const con = useContext(apiD);

	const searchvalue = ({ children }) => {
		const [myData, setMyData] = useState(filteredItems);

		return (
			<searchProduct.Provider value={{ myData, setMyData }}>
				{children}
			</searchProduct.Provider>
		);
	};
	const [filteredItems, setFilteredItems] = useState([]);
	function search(e) {
		const value = e.target.value;

		con.data.filter((product) => {
			if (
				(product.title.toLowerCase().includes(value) ||
					product.category.toLowerCase().includes(value)) &&
				!filteredItems.includes(product)
			) {
				setFilteredItems([...filteredItems, product]);
			}
		});
	}

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
						onClick={search}
					/>
					<button className="searchB">
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
					<img
						src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/shopping-cart.png"
						className="cPng"
						alt=""
					/>
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

export { Navbar, searchProduct };
