import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Spage from "./Spage";
import { apiD } from "../context/data";
import { useContext } from "react";
import Product from "./products";
import "./page.css";
import Navbar from "../components/navbar/nav";

function Page() {
	const { data, isLoading, isError, error } = useContext(apiD);

	return (
		<>
			<div className="mProduct">
				<div className="filter">a7a</div>
				<div className="prod">
					{data.map((product) => (
						<Product
							className={"a"}
							img={product.image}
							title={product.title}
							price={product.price}
							id={product.id}></Product>
					))}
				</div>
			</div>
		</>
	);
}

export default Page;
