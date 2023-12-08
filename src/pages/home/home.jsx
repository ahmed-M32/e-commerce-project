import React from "react";
import "./home.css";
import Swipeer from "./swipe";
import Navbar from "../../components/navbar/nav";





function Home() {
	return (
		<div className="mainPage">
			<Navbar></Navbar>
			<div className="caro">
				<Swipeer/>
			</div>
            <div className="productPre">
            </div>
		</div>
	);
}
export default Home;
