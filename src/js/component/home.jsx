import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
//create your first component
const Home = () =>{
	return(
		<div className="home">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
			</div>
		</div>
		
	);
};
export default Home;