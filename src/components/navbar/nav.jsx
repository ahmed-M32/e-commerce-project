import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<div className="barr">
			<div className="mainNav ">
				<div className="es">
					<Link to={"e-commerce-project/"} className="l">
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
						className="bar"
						type="text"
						placeholder="search for Products or Categories..."
					/>
					<button className="searchB">
						<img
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/pngwing.com.png"
							className="searchi"
							alt=""
						/>
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
							<Link to={"e-commerce-project/men"}>Men's Clothing</Link>
						</li>
						<li>Women's Clothing</li>
						<li>Electronics</li>
						<li>jewelry</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
