import React, { useContext } from "react";
import Product from "../../products call/products";
import { searchProduct } from "../navbar/nav";


const searchBarr = ({ props }) => {
	const filteredItems = useContext(searchProduct)
	console.log(filteredItems);
	return (
		<>
			<div className="searched-products">
				{filteredItems.map((product) => {
					<Product
						path={`/e-commerce-project/products/${product.id}`}
						className={"a"}
						img={product.image}
						title={product.title}
						price={product.price}
						id={product.id}></Product>;
				})}
			</div>
		</>
	);
};

export default searchBarr;
