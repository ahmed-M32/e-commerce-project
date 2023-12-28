import React from "react";
import axios from "axios";
import '../../dist/output.css';
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import "./products.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { apiD } from "../context/data";

function Product(props) {
	const { data, isLoading, isError, error } = useContext(apiD);
	const path1 = props.path
	return (

		<div className=" product pPage">
			<Link to={path1}>
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