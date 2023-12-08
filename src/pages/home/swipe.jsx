import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./home.css";

export default function Swipeer() {
	return (
		<Swiper
			spaceBetween={0}
			navigation={true}
			loop={true}
			modules={[Navigation, Autoplay]}
			autoplay={{
				delay: 4000,
			}}
			className="sw">
			<SwiperSlide>
				<img src="src\assets\7035634.jpg" alt="" className="ii" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="src\assets\4555927.jpg" alt="" className="ii" />
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="src\assets\image-spring-discount-sale-season-sale.jpg"
					alt=""
					className="ii"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
