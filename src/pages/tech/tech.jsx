import React from "react";
import { useContext } from "react";
import { apiD } from "../../context/data";
import "../../index.css";
import "./tech.css"
import SyncLoader from "react-spinners/SyncLoader";

import Product from "../../products call/products";

function Tech() {
	const {
		data,
		SortedData,
		isLoading,
		isError,
		SortItems,
		setFilter,
		filtered,
		setFilters,
	} = useContext(apiD);
	if (isLoading) {
		return <SyncLoader></SyncLoader>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (!data) {
		return null;
	}
	function handleRadio(value) {
		setFilter(value.target.value);
	}
	function handleremove() {
		setFilters(false);
	}
	return (
		<div className="tech-page-1 container w-full flex h-full flex-row">
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
						<div className="tech-filter-button" onClick={SortItems}>
							Sort
						</div>
						<div className="tech-filter-button" onClick={handleremove}>
							Remove
						</div>
					</div>
				</div>
			</div>
			<div className="grid w-full h-fit lg:grid-cols-5 sm:grid-cols-2 xl:grid-cols-4 ">
				{filtered && SortedData.length !== 0
					? SortedData.map((product) => {
							return product.category === "electronics" ? (
								<Product
									className="card"
									path={`/e-commerce-project/products/${product.id}`}
									img={product.image}
									title={product.title}
									price={product.price}
									id={product.id}></Product>
							) : (
								<React.Fragment key={product.id}></React.Fragment> // Add key prop for empty fragment
							);
					  })
					: data.map((product) => {
							return product.category === "electronics" ? (
								<Product
									className="card"
									path={`/e-commerce-project/products/${product.id}`}
									img={product.image}
									title={product.title}
									price={product.price}
									id={product.id}></Product>
							) : (
								<React.Fragment key={product.id}></React.Fragment> // Add key prop for empty fragment
							);
					  })}
			</div>
		</div>
	);
}
export default Tech;