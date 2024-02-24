import React from "react";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";
import { useState, useEffect } from "react";

const apiD = createContext();

const DataProvider = ({ children }) => {
	const [filter, setFilter] = useState("");
	const [filtered, setFilters] = useState(false);
	const [SortedData,setSortedData] = useState([]);

	const getData = () => {
		return axios.get("https://fakestoreapi.com/products").then((res) => {
			const result = res.data;
			return result;
		});
	};

	const { isLoading, isError, data, error } = useQuery({
		queryFn: getData,
		queryKey: ["products"],
		staleTime: 60000,
	});


	if (isLoading) {
		return (
			<div className="load">
				<SyncLoader color="#e56a77" />
			</div>
		);
	}
	if (isError) {
		return <p>Error: {error.message}</p>;
	}
	if (!data) {
		return null;
	}


	let SortedData1 = [...data];

	function SortItems() {
		if (filter === "ra") {
			SortedData1.sort((a, b) => a.rating.rate - b.rating.rate);
			setSortedData(SortedData1)


			setFilters(true);
		} else if (filter === "rd") {
			SortedData1.sort((a, b) => b.rating.rate - a.rating.rate);
			setSortedData(SortedData1)


			setFilters(true);
		} else if (filter === "pa") {
			SortedData1.sort((a, b) => a.price - b.price);
			setSortedData(SortedData1)
			setFilters(true);
		} else {
			SortedData1.sort((a, b) => b.price - a.price);
			setSortedData(SortedData1)

			setFilters(true);
		}
	}

	
	const ref = {
		"men's clothing": "men",
		"women's clothing": "women",
		jewelery: "jewelery",
		electronics: "tech",
	};

	const sharedData={
		isLoading,
		isError,
		data,
		error,
		ref,
		SortItems,
		setFilter,
		SortedData,
		filtered,
		setFilters,
	}

	

	
	
	return <apiD.Provider value={sharedData}>{children}</apiD.Provider>;
};

export { DataProvider, apiD };
