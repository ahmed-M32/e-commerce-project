import React, { useEffect } from "react";
import { apiD } from "../context/data";
import { useContext, useState } from "react";
import Product from "./products";
import "./page.css";
import { HiArrowSmallDown } from "react-icons/hi2";
/*import '../../dist/output.css'*/

function Page() {
	const { data, SortedData, SortItems, setFilter, filtered, setFilters } =
		useContext(apiD);

	function handleRadio(value) {
		setFilter(value.target.value);
	}
	function handleremove() {
		setFilters(false);
	}
	function makeResponsive() {
		let parent = document.querySelector(".filter");
		if (window.innerWidth < 600) {
			parent.classList.toggle("res");
			document.querySelector(".sort-by").classList.toggle("res-sort");
			parent.lastElementChild.classList.toggle("rotate");
			for (let i = 1; i < parent.children.length - 1; i++) {
				parent.children[0].classList.toggle("res-sort");
				parent.children[i].classList.toggle("responsive");
			}
		}
	}

	return (
		<>
			<div className="mProduct">
				<div className="filter-wrapper">
					<div className="filter responsive-filter case">
						<div className="sort-by">Sort by</div>
						<div className="sorting responsive">
							<div className="sort">
								<input
									type="radio"
									name="f"
									value={"ra"}
									onChange={handleRadio}
								/>{" "}
								rating asc
							</div>
							<div className="sort">
								<input
									type="radio"
									name="f"
									value={"rd"}
									onChange={handleRadio}
								/>{" "}
								rating desc
							</div>
							<div className="sort">
								<input
									type="radio"
									name="f"
									value={"pa"}
									onChange={handleRadio}
								/>{" "}
								price asc
							</div>
							<div className="sort">
								<input
									type="radio"
									name="f"
									value={"pd"}
									onChange={handleRadio}
								/>{" "}
								price desc
							</div>
						</div>
						<div className="filter-buttons responsive">
							<div className="filter-button" onClick={SortItems}>
								Sort
							</div>
							<div className="removefilter" onClick={handleremove}>
								Remove
							</div>
						</div>
						<div className="res-button" onClick={makeResponsive}>
							<HiArrowSmallDown className="reponsive" />
						</div>
					</div>
				</div>
				<div className="prod">
					{filtered && SortedData.length !== 0
						? SortedData.map((product) => (
								<Product
									key={product.id}
									path={`/e-commerce-project/products/${product.id}`}
									className={"a"}
									img={product.image}
									title={product.title}
									price={product.price}
									id={product.id}
								/>
						  ))
						: data.map((product) => (
								<Product
									key={product.id}
									path={`/e-commerce-project/products/${product.id}`}
									className={"a"}
									img={product.image}
									title={product.title}
									price={product.price}
									id={product.id}
								/>
						  ))}
				</div>
			</div>
		</>
	);
}

export default Page;
