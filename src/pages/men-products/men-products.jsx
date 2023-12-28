import React from "react";
import { useContext } from "react";
import "../../../dist/output.css";
import { apiD } from "../../context/data";
import SyncLoader from "react-spinners/SyncLoader";

import Product from "../../products call/products";

function Men() {
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
		<div className="grid grid-cols-4 gap-10">
			{data.map((product) => {
				return product.category === "men's clothing" ? (
					<Product className ="card"
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
	);
}
export default Men;
