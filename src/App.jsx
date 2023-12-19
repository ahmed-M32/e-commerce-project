import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/nav";
import SyncLoader from "react-spinners/SyncLoader";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client1 = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={client1}>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/e-commerce-project" element={<Home />}></Route>
					<Route path="/e-commerce-project/men" element={<men />}></Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}
export default App;
