import React from "react";
import { Carousel } from "react-bootstrap";
import test from "modules/images/test.jpg";
import test1 from "modules/images/test1.jpg";
import test2 from "modules/images/test2.jpg";
import { CarouselCustom, Line, PicBox } from "./styled";

const CarouselMain = ({ Page }) => {
  return (
    <div>
      <CarouselCustom>
        <Carousel.Item>
          <PicBox src={test} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <PicBox src={test1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <PicBox src={test2} alt="Third slide" />
        </Carousel.Item>
      </CarouselCustom>
      {Page ? null : <Line />}
    </div>
  );
};

export default CarouselMain;
