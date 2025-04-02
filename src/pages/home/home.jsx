import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { apiD } from "../../context/data";
import { BeatLoader } from "react-spinners";

function Home() {
	const { data, isLoading, isError, error } = useContext(apiD);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<BeatLoader color="#0ea5e9" />
			</div>
		);
	}

	if (isError) {
		return (
			<div className="flex items-center justify-center min-h-screen text-red-600">
				<p>Error: {error.message}</p>
			</div>
		);
	}

	if (!data) return null;

	return (
		<div className="bg-gray-50">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="space-y-6 animate-fade-in">
							<h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
								Discover a World of New Brands
							</h1>
							<p className="text-lg text-gray-600 leading-relaxed">
								Explore our curated collection of premium products. From fashion to tech, 
								find everything you need with unmatched quality and style.
							</p>
							<Link
								to="products/"
								className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
							>
								Explore Products
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</Link>
						</div>
						<div className="relative animate-slide-up">
							<img
								className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
								src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/charlesdeluvio-_4K7BwaHUGc-unsplash.jpg"
								alt="Featured Collection"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Grid */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid md:grid-cols-2 gap-8">
					{/* Men's Collection */}
					<div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300">
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
						<img
							className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/231130_StyleForecast_M__PRODUCT(1).png"
							alt="Men's Collection"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform">
							<h2 className="text-3xl font-display font-bold text-white mb-4">Men's Collection</h2>
							<Link
								to="men/"
								className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
							>
								Shop Men's
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Women's Collection */}
					<div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300">
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
						<img
							className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/pexels-lisa-fotios-1107604.jpg"
							alt="Women's Collection"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform">
							<h2 className="text-3xl font-display font-bold text-white mb-4">Women's Collection</h2>
							<Link
								to="women/"
								className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
							>
								Shop Women's
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Jewelry Collection */}
					<div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300">
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
						<img
							className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
							src="https://raw.githubusercontent.com/ahmed-M32/e-commerce-project/main/src/assets/edgar-soto-o87CUS_uDiQ-unsplash.jpg"
							alt="Jewelry Collection"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform">
							<h2 className="text-3xl font-display font-bold text-white mb-4">Jewelry Collection</h2>
							<Link
								to="jewelry/"
								className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
							>
								Shop Jewelry
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>

					{/* Tech Collection */}
					<div className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-hover transition-all duration-300">
						<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
						<img
							className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
							src="https://github.com/ahmed-M32/e-commerce-project/blob/main/src/assets/modern-stationary-collection-arrangement.jpg?raw=true"
							alt="Tech Collection"
						/>
						<div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform">
							<h2 className="text-3xl font-display font-bold text-white mb-4">Tech Collection</h2>
							<Link
								to="tech/"
								className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
							>
								Shop Tech
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
