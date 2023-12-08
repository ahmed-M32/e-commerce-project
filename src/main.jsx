import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path="e-commerce-project/" element={<App />}></Route>
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
