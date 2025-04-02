import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Product({ path, img, price, title }) {
	return (
		<Link 
			to={path}
			className="group block overflow-hidden rounded-lg bg-white shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1"
		>
			<div className="relative min-h-[70%] flex justify-center items-center p-4 bg-white">
				<img 
					src={img} 
					alt={title}
					className="w-[70%] h-auto object-contain group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute top-2 right-2">
					<span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur-sm">
						${price}
					</span>
				</div>
			</div>
			<div className="p-4">
				<h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
					{title}
				</h3>
			</div>
		</Link>
	);
}

Product.propTypes = {
	path: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};

export default Product;
