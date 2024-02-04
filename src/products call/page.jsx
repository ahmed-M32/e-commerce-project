import React from "react";
import { apiD } from "../context/data";
import { useContext ,useState} from "react";
import Product from "./products";
import "./page.css";
/*import '../../dist/output.css'*/

function Page() {
	const { data } = useContext(apiD);

	return (
		<>
			<div className="mProduct">
				<div className="prod">
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
			</div>
		</>
	);
}

export default Page;
