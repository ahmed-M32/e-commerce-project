import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Product from "../../products call/products";
import Swipeer from "./swipe";
import { useContext } from "react";
import {apiD}  from "../../context/data";



function Home() {
	const { data,isLoading,isError,error} = useContext(apiD);
	
	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error: {error.message}</p>;
	}

	if (!data) {
		return null;
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
						<SwiperSlide>
							<Product
								title={data[0].title}
								img={data[0].image}
								price={data[0].price}>
									id = {data[0].id}
								</Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[1].title}
								img={data[1].image}
								price={data[1].price}
								id = {data[1].id}
								></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[2].title}
								img={data[2].image}
								price={data[2].price}
								id = {data[2].id}
								></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[3].title}
								img={data[3].image}
								price={data[3].price}
								id = {data[3].id}
								></Product>
						</SwiperSlide>
						<SwiperSlide>
							<Product
								title={data[4].title}
								img={data[4].image}
								price={data[4].price}
								id = {data[4].id}
								></Product>
						</SwiperSlide>
					</Swiper>
					
				</div>
			</div>
		</>
	);
}
export default Home;
