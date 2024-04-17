import React from "react";
import { Carousel } from 'react-bootstrap';

//include images into your bundle
//import spongebob1 from "/workspaces/ZoranAndEileenLandingPage/src/img/spongebob1.jpg";

//create your first component
function Cards({ title, imageSrc, imageSrc2, imageSrc3, text,}){
	return (
	<div className="card" style={{width: "18rem"}}>
     <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imageSrc} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageSrc2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageSrc3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-dark">Rent Now!</a>
      </div>
    </div>
	);
}
export default Cards;
