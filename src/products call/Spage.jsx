import React, { useContext } from "react";
import { apiD } from "../context/data";
import Stars from "./star";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart-context";
import { Toaster, toast } from "sonner";

function Spage() {
	const { data, ref } = useContext(apiD);
	const { addToLocalStorage, setCartCounter } = useContext(CartContext);
	const pid = window.location.href.split("/").reverse()[0];
	const product = data[pid - 1];

	const rating = product.rating.rate.toString().split(".");
	if (rating.length === 1) {
		rating.push("0");
	}

	const handleAddToCart = () => {
		toast.success("Item added to cart");
		addToLocalStorage(product);
		if (localStorage.getItem("cart")) {
			setCartCounter(JSON.parse(localStorage.getItem("cart")).length);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<Toaster position="top-center" richColors />
			
			<div className="max-w-7xl mx-auto">
				<div className="bg-white rounded-2xl shadow-card overflow-hidden">
					<div className="grid md:grid-cols-2 gap-8 p-8">
						{/* Product Image */}
						<div className="space-y-6">
							<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
								<img 
									src={product.image} 
									alt={product.title}
									className="h-full w-full object-contain object-center hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<button
								onClick={handleAddToCart}
								className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
							>
								<FaCartPlus className="mr-2" />
								Add to Cart
							</button>
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<div>
								<h1 className="text-2xl font-display font-bold text-gray-900 sm:text-3xl">
									{product.title}
								</h1>
								<p className="mt-4 text-3xl font-bold text-primary-600">
									${product.price}
								</p>
							</div>

							<div className="flex items-center space-x-2">
								<div className="flex">
									<Stars
										fullN={parseInt(rating[0])}
										halfN={rating[1] !== "0" ? 1 : 0}
										noN={5 - (parseInt(rating[0]) + (rating[1] !== "0" ? 1 : 0))}
									/>
								</div>
								<span className="text-sm text-gray-600">
									{product.rating.rate} ({product.rating.count} Reviews)
								</span>
							</div>

							<div className="border-t border-gray-200 pt-6">
								<div className="flex items-center">
									<span className="text-sm font-medium text-gray-600">Category:</span>
									<Link
										to={`/e-commerce-project/${ref[product.category]}`}
										className="ml-2 text-sm font-medium text-primary-600 hover:text-primary-500 capitalize"
									>
										{product.category}
									</Link>
								</div>
							</div>

							<div className="border-t border-gray-200 pt-6">
								<h3 className="text-lg font-medium text-gray-900 mb-4">Description</h3>
								<p className="text-base text-gray-600 leading-relaxed">
									{product.description}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products Section can be added here */}
			</div>
		</div>
	);
}

export default Spage;
