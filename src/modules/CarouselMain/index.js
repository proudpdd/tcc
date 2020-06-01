import React from "react";
import { Carousel } from "react-bootstrap";
import test from "modules/images/test.jpg";
import test1 from 'modules/images/test1.jpg'
import test2 from 'modules/images/test2.jpg'
import { CarouselCustom, Line } from "./styled";

const CarouselMain = () => {
  return (
    <div>
      <CarouselCustom>
        <Carousel.Item>
          <img className="d-block w-100" src={test} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={test1} alt="Third slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={test2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </CarouselCustom>
      <Line />
    </div>
  );
};

export default CarouselMain;
