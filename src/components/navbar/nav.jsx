import "./nav.css";
import React from "react";

function Navbar(props) {
	return (
		<div className="barr">
			<div className="mainNav ">
				<img
					src="src\assets\shopping-and-ecommerce29.png"
					alt=""
					className="logo"
				/>
				<span className="e">E</span>-Shop
				<div className="search">
					<input className="bar" type="text" />
				</div>
				<div className=" category">
					Products
					<img
						src="src\assets\186407_arrow_up_icon.png"
						className="arrow"
						alt=""
					/>
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
