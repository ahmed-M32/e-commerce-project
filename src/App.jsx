import React, { useEffect, useState, useContext } from "react";
import Navbar from "./components/navbar/nav";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./products call/page.jsx";
import Spage from "./products call/Spage.jsx";
import { DataProvider } from "../src/context/data.jsx";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import './index.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS here

import Men from "./pages/men-products/men-products.jsx"
import Women from "./pages/women-products/women.jsx"
import Tech from "./pages/tech/tech.jsx"
import Jewelery from "./pages/jewelery/jewelery.jsx";


const client1 = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={client1}>
			<BrowserRouter>
				<DataProvider>
					<Navbar />

					<Routes>


						<Route path="/e-commerce-project" element={<Home />}></Route>
						<Route path="/e-commerce-project/men" element={<Men />}></Route>
						<Route path="/e-commerce-project/women" element={<Women />}></Route>
						<Route path="/e-commerce-project/tech" element={<Tech />}></Route>
						<Route path="/e-commerce-project/jewelery" element={<Jewelery />}></Route>



						<Route
							path="/e-commerce-project/products"
							element={<Page></Page>}></Route>
						<Route
							path="/e-commerce-project/products/:productid"
							element={<Spage></Spage>} exact= {false}></Route>


					</Routes>
				</DataProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
export default App;
