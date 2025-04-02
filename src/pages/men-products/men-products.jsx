import React from "react";
import { useContext } from "react";
import { apiD } from "../../context/data";
import { HiArrowSmallDown, HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BeatLoader } from "react-spinners";
import Product from "../../products call/products";

function Men() {
	const {
		data,
		SortedData,
		isLoading,
		isError,
		SortItems,
		setFilter,
		filtered,
		setFilters,
	} = useContext(apiD);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<BeatLoader color="#0ea5e9" />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex items-center justify-center min-h-screen text-red-500">
				Error: {error.message}
			</div>
		);
	}

	if (!data) return null;

	const handleRadio = (value) => setFilter(value.target.value);
	const handleRemove = () => setFilters(false);
	const makeResponsive = () => {
		const filterEl = document.querySelector(".filter-panel");
		filterEl?.classList.toggle("show-filter");
	};

	const products = filtered && SortedData.length !== 0 ? SortedData : data;
	const menProducts = products.filter(p => p.category === "men's clothing");

	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
			{/* Filter Panel */}
			<div className="max-w-7xl mx-auto">
				<div className="bg-white rounded-xl shadow-sm mb-8">
					<div className="filter-panel p-4 sm:p-6">
						<div className="flex items-center justify-between mb-4">
							<h2 className="text-lg font-medium text-gray-900 flex items-center">
								<HiAdjustmentsHorizontal className="mr-2" />
								Filter & Sort
							</h2>
							<button 
								onClick={makeResponsive}
								className="sm:hidden rounded-full p-2 hover:bg-gray-100"
							>
								<HiArrowSmallDown />
							</button>
						</div>
						
						<div className="hidden sm:block filter-content">
							<div className="space-y-4">
								{/* Sort Options */}
								<div className="grid grid-cols-2 gap-4">
									<label className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary-500 cursor-pointer transition-colors">
										<input
											type="radio"
											name="sort"
											value="ra"
											onChange={handleRadio}
											className="text-primary-600 focus:ring-primary-500"
										/>
										<span>Rating (Low to High)</span>
									</label>
									<label className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary-500 cursor-pointer transition-colors">
										<input
											type="radio"
											name="sort"
											value="rd"
											onChange={handleRadio}
											className="text-primary-600 focus:ring-primary-500"
										/>
										<span>Rating (High to Low)</span>
									</label>
									<label className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary-500 cursor-pointer transition-colors">
										<input
											type="radio"
											name="sort"
											value="pa"
											onChange={handleRadio}
											className="text-primary-600 focus:ring-primary-500"
										/>
										<span>Price (Low to High)</span>
									</label>
									<label className="flex items-center space-x-2 p-3 rounded-lg border hover:border-primary-500 cursor-pointer transition-colors">
										<input
											type="radio"
											name="sort"
											value="pd"
											onChange={handleRadio}
											className="text-primary-600 focus:ring-primary-500"
										/>
										<span>Price (High to Low)</span>
									</label>
								</div>

								{/* Action Buttons */}
								<div className="flex space-x-4 mt-6">
									<button
										onClick={SortItems}
										className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
									>
										Apply Sort
									</button>
									<button
										onClick={handleRemove}
										className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
									>
										Reset
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{menProducts.map((product) => (
						<Product
							key={product.id}
							path={`/e-commerce-project/products/${product.id}`}
							img={product.image}
							title={product.title}
							price={product.price}
							id={product.id}
						/>
					))}
				</div>

				{/* Empty State */}
				{menProducts.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500">No products found.</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Men;
