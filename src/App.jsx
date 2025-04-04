import React from "react";
import { Navbar } from "./components/navbar/nav";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./products call/page.jsx";
import Spage from "./products call/Spage.jsx";
import { DataProvider } from "./context/data.jsx";
import { MyContextProvider } from "./context/search-context/search.jsx";
import { CartContextProvider } from "./context/cart-context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "tailwindcss/tailwind.css";
import Men from "./pages/men-products/men-products.jsx";
import Women from "./pages/women-products/women.jsx";
import Tech from "./pages/tech/tech.jsx";
import Jewelry from "./pages/jewelry/jewelry.jsx";
import SearchBarr from "./components/searchBar/searchBar.jsx";
import Cart from "./pages/cart/cart.jsx";

const client1 = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={client1}>
			<BrowserRouter>
				<MyContextProvider>
					<CartContextProvider>
						<DataProvider>
							<Navbar />

							<Routes>
								<Route path="/e-commerce-project" element={<Home />}></Route>
								<Route path="/e-commerce-project/men" element={<Men />}></Route>
								<Route
									path="/e-commerce-project/women"
									element={<Women />}></Route>
								<Route
									path="/e-commerce-project/tech"
									element={<Tech />}></Route>
								<Route
									path="/e-commerce-project/jewelry"
									element={<Jewelry />}></Route>

								<Route
									path="/e-commerce-project/products"
									element={<Page></Page>}></Route>
								<Route
									path="/e-commerce-project/products/:productid"
									element={<Spage></Spage>}
									exact={false}></Route>

								<Route
									path="/e-commerce-project/search"
									element={<SearchBarr />}></Route>
								<Route
									path="/e-commerce-project/cart"
									element={<Cart />}></Route>
							</Routes>
						</DataProvider>
					</CartContextProvider>
				</MyContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
