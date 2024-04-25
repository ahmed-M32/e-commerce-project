import React from "react";
import { useContext } from "react";
import { apiD } from "../../context/data";
import "../../index.css";
import "./women.css";
import SyncLoader from "react-spinners/SyncLoader";
import Product from "../../products call/products";
import { HiArrowSmallDown } from "react-icons/hi2";


function Women() {
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
		return <p>Error: {isError.message}</p>;
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
		<div className="women-page-1 ">
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
						<div className="women-filter-button" onClick={SortItems}>
							Sort
						</div>
						<div className="women-filter-button" onClick={handleremove}>
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
					? SortedData.map((product) => {
							return product.category === "women's clothing" ? (
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
							return product.category === "women's clothing" ? (
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
export default Women;
