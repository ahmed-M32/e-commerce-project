import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { apiD } from "../context/data";
import "./spage.css";
import Stars from "./star";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import { Toaster, toast } from 'sonner'



function Spage() {
	const { data, ref } = useContext(apiD);

	const { addToLocalStorage, setCartCounter, setCounterState, cartCounter } =
		useContext(CartContext);
	const pid = window.location.href.split("/").reverse()[0];

	const r = data[pid - 1].rating.rate.toString().split(".");
	if (r.length == 1) {
		r.push("0");
	}
	const handleClick = () => {
		toast.success("an item was added")
		addToLocalStorage(data[pid - 1]);
		setCartCounter(JSON.parse(localStorage.getItem("cart")).length);
	};

	
	return (
		<>
			<div className="u">
				<Toaster position="top-center" richColors></Toaster>
				<div className={`mProduct1 ${data[pid - 1].category}`}>
					<div className="g-img">
						<img className="sImg" src={`${data[pid - 1].image}`} alt="" />
						<div className="a-cart" onClick={handleClick}>
							<FaCartPlus />
							&nbsp;&nbsp; add to cart{" "}
						</div>
					</div>
					<div className="txt">
						<div className="pTitle">{data[pid - 1].title}</div>

						<div className="pPrice">${data[pid - 1].price}</div>
						<div className="rate">
							<div className="sss flex flex-row">
								<Stars
									fullN={parseInt(r[0])}
									halfN={r[1] != "0" ? 1 : 0}
									noN={5 - (parseInt(r[0]) + (r[1] != "0" ? 1 : 0))}></Stars>
							</div>
							{data[pid - 1].rating.rate}({data[pid - 1].rating.count} Reviews)
						</div>
						<div className="ccc">
							category &nbsp; &nbsp;
							<div className="category">
								<Link to={`/e-commerce-project/${ref[data[pid - 1].category]}`}>
									{data[pid - 1].category}
								</Link>
							</div>
						</div>
					</div>
					<div className="desc">
						<span className="dT">
							Description <br />
						</span>
						{data[pid - 1].description}
					</div>
				</div>
			</div>
		</>
	);
}

export default Spage;
