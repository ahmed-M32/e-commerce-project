import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import "./products.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { apiD } from "../context/data";

function Product(props) {
	
	return (

		<div className="product pPage">
			<Link to={`products/${props.id}`}>
				<div className="pimg">
					<img src={props.img} alt="" className="pi" />
				</div>
				<div className="price">${props.price}</div>
				<div className="title">
					<div className="t">{props.title}</div>{" "}
				</div>
			</Link>
		</div>
	);
}

export default Product;
