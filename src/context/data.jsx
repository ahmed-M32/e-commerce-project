import React from "react";
import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SyncLoader from "react-spinners/SyncLoader";

const apiD = createContext();

const DataProvider = ({ children }) => {
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

	const ref = {
		"men's clothing": "men",
		"women's clothing": "women",
		jewelery: "jewelery",
		electronics: "tech",
	};

	const sharedData = { isLoading, isError, data, error, ref };
	return <apiD.Provider value={sharedData}>{children}</apiD.Provider>;
};

export { DataProvider, apiD };
