import React, { useEffect } from "react";
import { apiD } from "../context/data";
import { useContext, useState } from "react";
import Product from "./products";
import "./page.css";
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

	return (
		<>
			<div className="mProduct">
				<div className="filter-wrapper">
					<div className="filter">
						<div className="sort-by">Sort by</div>
						<div className="sorting">
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
						<div className="filter-buttons">
							<div className="filter-button" onClick={SortItems}>
								Sort
							</div>
							<div className="removefilter" onClick={handleremove}>
								Remove
							</div>
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
