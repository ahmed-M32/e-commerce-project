import React from "react";
import { useContext } from "react";
import { apiD } from "../context/data";

function Spage(props) {
	const { data, isLoading, isError, error } = useContext(apiD);
    const pid = window.location.href.split("/").reverse()[0]

    console.log(pid);
    
	return (
		<>
        <div className={`mProduct ${data[pid].category}`}>
            
            <div className="g-img"><img src={`${data[pid].image}`} alt="" /></div>
            <div className="pTitle">{data[pid].title}</div>
            <div className="desc">{data[pid].description}</div>
            <div className="pPrice">${data[pid].price}</div>
            <div className="rate">{data[pid].rating.rate}</div>
            <div className="count">{data[pid].rating.count}</div>
            <div className="category">{data[pid].category}</div>


        </div>
		</>
	);
}

export default Spage;
