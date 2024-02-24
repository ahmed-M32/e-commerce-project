import React from "react";
import "../../index.css";
import "./home.css";
import SyncLoader from "react-spinners/SyncLoader";
import "swiper/css";
import "swiper/css/navigation";
import Product from "../../products call/products";
import { Link } from "react-router-dom";
import Swipeer from "./swipe";
import { useContext } from "react";
import { apiD } from "../../context/data";

function Home() {
	const { data, isLoading, isError, error } = useContext(apiD);

	if (isLoading) {
		return <SyncLoader className="loading"></SyncLoader>;
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
	return (
		<>
			<div className="mainPage main">
				<div className="caro">
					<div className="landing-text">
						<h1 className="landing-text2">discover a world of new brands</h1>
						<p className="lorem">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Quibusdam obcaecati labore sit deserunt ea, ex incidunt ullam
							porro harum autem, magni ad, voluptates reprehenderit tempore
							saepe eveniet amet placeat accusamus?
						</p>
						<div className="products-button"> <Link to ={"products/"}>see our products</Link></div>
					</div>
					<></>
					<div className="landing">
						<div className="landing-img">
							<img
								className="img-container"
								src="src\assets\charlesdeluvio-_4K7BwaHUGc-unsplash.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="caro2">
					<div className="men-image">
						<div className="men-h">
							<h1 className="landing-text3">
								we have a huge collection for men
							</h1>
						</div>
						<div className="m-img">
							<img
								src="src\assets\231130_StyleForecast_M__PRODUCT(1).png"
								className="mimg"
								alt=""
							/>
						</div>
					</div>
					<div className="men-page">
						<div className="men-button">
							{" "}
							<Link to={"men/"}>see the men's collection</Link>
						</div>
					</div>
				</div>
				<div className="caro3">
					<div className="women-text">
						<h1 className="women-t">women clothes</h1>
						<p className="lorem">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Quibusdam obcaecati labore sit deserunt ea, ex incidunt ullam
							porro harum autem, magni ad, voluptates reprehenderit tempore
							saepe eveniet amet placeat accusamus?
						</p>
						<div className="women-button">
							{" "}
							<Link to={"women/"}>Women's clothing</Link>
						</div>
					</div>
					<div className="women-img">
						<img
							className="wimg"
							src="src\assets\pexels-lisa-fotios-1107604.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="caro4">
					<div className="jimg">
						<img
							src="src\assets\edgar-soto-o87CUS_uDiQ-unsplash.jpg"
							className="ji"
							alt=""
						/>
					</div>
					<div className="j-text">
						<h1 className="jtext">Jewelry and acccesories</h1>
						<div className="j-button">
							{" "}
							<Link to={"jewelery/"}>jewelry collection</Link>
						</div>
					</div>
				</div>
				<div className="caro5" >

					<div className="t-img">
						<img src="src\assets\modern-stationary-collection-arrangement.jpg" className="ti" alt="" />
					</div>
					<div className="t-text">
						<h1 className="t-h">
							tech products
						</h1>
						<p className="lorem2">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias veritatis incidunt ipsa eveniet iure quae dignissimos culpa fugit explicabo consectetur asperiores, rem sequi magni unde nobis eligendi error aut nihil laborum. Ratione, aspernatur distinctio placeat voluptate, eos, quam sunt accusantium adipisci suscipit optio consectetur deserunt accusamus corporis mollitia nam quaerat?
						</p>
						<div className="t-button">
							<Link to={"tech/"}>
							view tech products 

							</Link>

						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Home;
