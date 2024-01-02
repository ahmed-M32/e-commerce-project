import React from "react";
import { useContext } from "react";
import { apiD } from "../../context/data";
import "../../index.css";
import SyncLoader from "react-spinners/SyncLoader";
import Product from "../../products call/products";

function Women() {
	const { data, isLoading, isError, error } = useContext(apiD);

	if (isLoading) {
		return <SyncLoader></SyncLoader>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (!data) {
		return null;
	}
	console.log(data);
	return (
		<div className="container w-full flex h-full flex-row">
			
			<div className="grid w-full  h-fit lg:grid-cols-5 sm:grid-cols-2 xl:grid-cols-4 ">
				{data.map((product) => {
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