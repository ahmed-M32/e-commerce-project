import React, { useContext, useEffect, useRef } from "react";
import Product from "../../products call/products";
import "./search.css";
import { SearchProduct } from "../../context/search-context/search";

const SearchBarr = () => {
	const { data } = useContext(SearchProduct);

	const isInitialMount = useRef(true);

	useEffect(() => {
		if (data.length > 0) {
			if (!isInitialMount.current) {
			} else {
				isInitialMount.current = false;
			}
		}

		return () => {};
	}, [data]);

	if (data.length == 0) {
		return <div className="no-result"> no Results</div>;
	} else {
		return (
			<>
				<div className="search-product">
					{data.map((product) => (
						<Product
							path={`/e-commerce-project/products/${product.id}`}
							className={"a"}
							img={product.image}
							title={product.title}
							price={product.price}
							id={product.id}></Product>
					))}
				</div>
			</>
		);
	}
};

export default SearchBarr;
