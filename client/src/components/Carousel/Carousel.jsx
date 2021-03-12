import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'
import {Link} from "react-router-dom"

export default class Carousel extends React.Component {


  render() {
    return (
      <CarouselProvider
        className="our-carousel"
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >

        <Slider>
          <Slide index={0}>
            <Link to="/pets/604a5ce5c01a0e290be50d11">
            <img
              className="carousel-image"
              src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50708836/1/?bust=1615398914&width=1080"
              alt="animal" />
          </Link>
          </Slide>
          <Slide index={1}>
            <Link to="/pets/604a5ce5c01a0e290be50d12">
              <img className="carousel-image" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50829869/2/?bust=1615479317&width=1080" alt="animal" />
            </Link>
          </Slide>
          <Slide index={2}>
            <Link to="/pets/604a5ce5c01a0e290be50d14">
              <img className="carousel-image" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48885469/1/?bust=1614728729&width=720" alt="animal" />
            </Link>
          </Slide>
          </Slider>
          
        <ButtonBack>&#171;</ButtonBack>
        <ButtonNext>&#187;</ButtonNext>
        {/* <DotGroup></DotGroup> */}

      </CarouselProvider>
    );
  }
}