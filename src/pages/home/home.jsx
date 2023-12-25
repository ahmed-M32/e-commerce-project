import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SyncLoader from "react-spinners/SyncLoader";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Product from "../../products call/products";
import Swipeer from "./swipe";
import { useContext } from "react";
import { apiD } from "../../context/data";

function Home(props) {
	const { data, isLoading, isError, error } = useContext(apiD);
	const path1 = props.path;

	if (isLoading) {
		return <SyncLoader></SyncLoader>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (!data) {
		return null;
	}
	function rInt(min, max) {
		const usedNumbers = [];

		function generate() {
			if (usedNumbers.length === max - min + 1) {
				return null;
			}

			let randomNumber;
			do {
				randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			} while (usedNumbers.includes(randomNumber));

			usedNumbers.push(randomNumber);
			return randomNumber;
		}

		return generate;
	}

	var g = rInt(0, 19);
	const arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push(g());
	}
	console.log(data);
	return (
		<>
			<div className="mainPage">
				<div className="caro">
					<Swipeer></Swipeer>
				</div>
				<div className="gap"></div>
				<div className="productPre">
					<div className="text">highly rated</div>
					<Swiper
						spaceBetween={1}
						navigation={true}
						loop={true}
						modules={[Navigation, Autoplay]}
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
						}}
						className="gr">
						{arr.map((e) => (
							<SwiperSlide>
								<Product
									path={`/e-commerce-project/products/${data[e].id}`}
									title={data[e].title}
									img={data[e].image}
									price={data[e].price}
									id={data[e].id}></Product>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</>
	);
}
export default Home;
