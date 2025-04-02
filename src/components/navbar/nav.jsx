import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { apiD } from "../../context/data";
import { CartContext } from "../../context/cart-context";
import { SearchProduct } from "../../context/search-context/search";
import { debounce } from 'lodash';

function Navbar() {
	const con = useContext(apiD);
	const { cartCounter } = useContext(CartContext);
	const { updateData } = useContext(SearchProduct);
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchFocused, setIsSearchFocused] = useState(false);

	// Debounced search function for better performance
	const debouncedSearch = useCallback(
		debounce((value) => {
			const filtered = con.data.filter((product) => {
				const searchValue = value.toLowerCase();
				return (
					product.title.toLowerCase().includes(searchValue) ||
					product.category.toLowerCase().includes(searchValue)
				);
			});
			updateData(filtered);
		}, 300),
		[con.data, updateData]
	);

	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchQuery(value);
		debouncedSearch(value);
	};

	return (
		<nav className="sticky top-0 z-50 bg-white shadow-card backdrop-blur-lg bg-opacity-90">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<Link to="/e-commerce-project/" className="flex items-center">
							<img
								src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/shopping-and-ecommerce29.png"
								alt="Store Logo"
								className="h-8 w-auto"
							/>
							<span className="ml-2 text-lg font-display font-semibold text-gray-900">
								Modern Store
							</span>
						</Link>
					</div>

					<div className="flex-1 max-w-2xl mx-8">
						<div className="relative">
							<input
								type="text"
								placeholder="Search products..."
								className={`w-full px-4 py-2 rounded-full bg-gray-100 border-2 transition-all duration-200 ease-in-out
									${isSearchFocused 
										? 'border-primary-500 shadow-lg' 
										: 'border-transparent shadow-card'
									}
									focus:outline-none focus:bg-white`}
								value={searchQuery}
								onChange={handleSearch}
								onFocus={() => setIsSearchFocused(true)}
								onBlur={() => setIsSearchFocused(false)}
							/>
							<Link
								to="/e-commerce-project/search"
								className="absolute right-3 top-1/2 transform -translate-y-1/2"
							>
								<svg
									className="w-5 h-5 text-gray-400 hover:text-primary-500 transition-colors"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</Link>
						</div>
					</div>

					<div className="flex items-center">
						<Link
							to="/e-commerce-project/cart"
							className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
						>
							<svg
								className="w-6 h-6 text-gray-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							{cartCounter > 0 && (
								<span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
									{cartCounter}
								</span>
							)}
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
