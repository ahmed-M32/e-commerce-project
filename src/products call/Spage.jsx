import React from "react";
import { useContext } from "react";
import { apiD } from "../context/data";
import "./spage.css";
import Stars from "./star";
import { FaCartPlus } from "react-icons/fa6";

import { render } from "react-dom";

function Spage(props) {
	const { data, isLoading, isError, error } = useContext(apiD);
	const pid = window.location.href.split("/").reverse()[0];

	const r = data[pid - 1].rating.rate.toString().split(".");
	if (r.length == 1) {
		r.push("0");
	}
	const rateStar = [];

	console.log(r);

	return (
		<>
			<div className="u">
				<div className={`mProduct1 ${data[pid - 1].category}`}>
					<div className="g-img">
						<img className="sImg" src={`${data[pid - 1].image}`} alt="" />
						<div className="a-cart"><FaCartPlus />&nbsp;&nbsp;  add to cart  </div>
					</div>
					<div className="txt">
						<div className="pTitle">{data[pid - 1].title}</div>

						<div className="pPrice">${data[pid - 1].price}</div>
						<div className="rate">
							<div className="sss">
								<Stars
									fullN={parseInt(r[0])}
									halfN={r[1] != "0" ? 1 : 0}
									noN={5 - (parseInt(r[0]) + (r[1] != "0" ? 1 : 0))}></Stars>
							</div>
							{data[pid - 1].rating.rate}({data[pid - 1].rating.count} Reviews)
						</div>
						<div className="ccc">
							category &nbsp; &nbsp;
							<div className="category">{data[pid - 1].category}</div>
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
