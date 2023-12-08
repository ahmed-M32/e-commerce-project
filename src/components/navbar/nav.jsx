import "./nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<div className="barr">
			<div className="mainNav ">
			<div className="es">
				<Link to = {"e-commerce-project/"}></Link>
				<img
					src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/shopping-and-ecommerce29.png"
					alt=""
					className="logo"
				/>
				<span className="e">E</span>-Shop
				</div>
				<div className="search">
					<input className="bar" type="text" placeholder="search for Products or Categories..." />
					<button className="searchB"> 
						<img src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/mainsrc/assets/pngwing.com.png" className ="searchi" alt="" />
					</button>
				</div>
				<div className="cart">
					<img src="src\assets\shopping-cart.png" className="cPng" alt="" />
				</div>
			</div>
			<div className="secBar">
				<div className="cats1">
					<ul className="cats">
						<li>Men's Clothing</li>
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
