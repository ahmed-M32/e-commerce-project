import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Product from "../../products call/products";
import Swipeer from "./swipe";

function Home() {
	const getData = () => {
		return axios.get("https://fakestoreapi.com/products").then((res) => {
			const result = res.data;
			return result;
		});
	};

	const { isLoading, isError, data, error } = useQuery({
		queryFn: getData,
		queryKey: ["products"],
		staleTime: 60000,
	});

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (!data) {
		return null;
	}
	console.log(data[0]);
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
						<SwiperSlide>
							<Product
								title={data[0].title}
								img={data[0].image}
								price={data[0].price}></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[1].title}
								img={data[1].image}
								price={data[1].price}></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[2].title}
								img={data[2].image}
								price={data[2].price}></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[3].title}
								img={data[3].image}
								price={data[3].price}></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[4].title}
								img={data[4].image}
								price={data[4].price}></Product>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
}
export default Home;
