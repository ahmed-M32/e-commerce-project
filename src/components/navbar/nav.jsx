import "./nav.css";
import React, { createContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext, useState  } from "react";
import { apiD } from "../../context/data";
import { SearchProduct } from "../../context/search-context/search";

function Navbar(props) {
	const con = useContext(apiD);

	const { data, updateData } = useContext(SearchProduct);
	const [filteredItems, setFilteredItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const isMounted = useRef(false)
	function search() {
		const value = searchQuery.toLowerCase();
		const filtered = con.data.filter((product) => {
			return (
				product.title.toLowerCase().includes(value) ||
				product.category.toLowerCase().includes(value)
			);
		});

		setFilteredItems(filtered);
		updateData(filtered);
	}

	/*useEffect(() => {
		if (isMounted.current && filteredItems.length > 0) {
			updateData(filtered);
		} else {
			isMounted.current = true;
		}
	}, [filteredItems]);*/

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

export { Navbar };
