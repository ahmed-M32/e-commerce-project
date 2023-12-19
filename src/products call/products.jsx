import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import "./products.css";

function Product(props) {
	const { title ,img,price} = props;
	return (
		<div className="product">
            <div className="pimg">
                <img src={props.img} alt="" className="pi"/>
            </div>
			<div className="price">
				${props.price}
			</div>
			<div className="title">
				<div className="t">{props.title}</div>{" "}
			</div>
		</div>
	);
}

export default Product;
