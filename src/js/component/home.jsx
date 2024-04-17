//import { Carousel } from 'react-bootstrap';
//import cards from '/component/cards.jsx';
//import footer from './components/footer.jsx';
//import './index.css';
import React from 'react';
import Cards from './cards.jsx'
import Footer from './footer.jsx'

function Home() {
  return (
    <div>
      <h1>Nav Bar</h1>
      <h2>jumbotron</h2>
    <div className="container">
      <div className="row gy-4 mb-4">
        <div className="col">
          <Cards
             title="Spongebob Squarepants House"
             imageSrc="https://i.ibb.co/PwHpQx4/Spongebob-1.jpg"
             imageSrc2="https://i.ibb.co/SPM7DKX/Spongebob-2.jpg"
             imageSrc3="https://i.ibb.co/vYf2sYm/Spongebob-3.jpg"
             text="SpongeBob SquarePants' house is a whimsical pineapple-shaped dwelling located in Bikini Bottom, featuring a vibrant exterior adorned with tropical foliage and a quirky interior filled with colorful furnishings and underwater-themed decorations."
          />
        </div>
        <div className="col">
          <Cards 
            title="The Shire"
            imageSrc="https://i.ibb.co/bBBgTRN/The-Shire-1.jpg"
            imageSrc2="https://i.ibb.co/KrcWTTY/The-Shire-2.jpg"
            imageSrc3="https://i.ibb.co/XSQzwqB/The-Shire-3.jpg"
            text="Escape to the picturesque and quaint Shire, where rolling hills, cozy hobbit-holes, and lush greenery await in this charming getaway."
            />
        </div>
        <div className="col">
          <Cards 
            title="Death Star"
            imageSrc="https://i.ibb.co/chR9pbR/Death-Star-1.jpg"
            imageSrc2="https://i.ibb.co/2gWzkzy/Death-Star-2.jpg"
            imageSrc3="https://i.ibb.co/VtDHNJx/Death-Star-3.jpg"
            text="Welcome to the Death Star, where you'll enjoy luxurious living spaces, state-of-the-art facilities, and unparalleled security measures, all while commanding respect and fear throughout the galaxy."
          />
        </div>
        <div className="col">
          <Cards 
            title="The Cupboard Under the Stairs"
            imageSrc="https://i.ibb.co/Cm1Cyd3/Harry-Potter-1.jpg"
            imageSrc2="https://i.ibb.co/XzcHd8w/Harry-Potter-2.jpg"
            imageSrc3="https://i.ibb.co/vdk1jD2/Harry-Potter-3.jpg"
            text="Step into the enchanting world of Harry Potter with this cozy and charming Cupboard Under the Stairs, offering a unique and nostalgic experience that will transport you into the magical universe of the beloved wizarding series."
            />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Home;
