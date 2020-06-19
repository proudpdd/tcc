import styled from "styled-components";
import { Carousel, Row } from "react-bootstrap";

export const PicBox = styled.img`
  width: 100%;
  height: 48.83vw;
  position: relative;
  top: -2px;
  transform: rotate(180deg);
  @media (max-width: 767px) {
    height: 400px;
  }
  @media (max-width: 425px) {
    height: 250px;
  }
`;

export const HeadBox = styled.img`
  width: 100%;
  position: relative;
  top: -8.33vw;
  z-index: 1;
  transform: rotate(180deg);
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  color: #0a2980;
  font-family: promptLight;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: fit-content;
  font-size: 30px;
  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
  padding-bottom: 20px;
`;
export const Circle = styled.img`
  width: 19.53vw;
  height: 19.53vw;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 25px;
`;

export const PicNews = styled.img`
  width: 100%;
  height: 80%;
`;

export const CarouselCustom = styled(Carousel)`
  .carousel-inner {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .carousel-indicators {
    display: none;
  }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23b9ab60' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23b9ab60' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
  }

  .carousel-control-prev {
    width: 3%;
    justify-content: flex-start;
    @media (max-width: 767px) {
      width: 10%;
    }
  }
  .carousel-control-next {
    width: 3%;
    justify-content: flex-end;
    @media (max-width: 767px) {
      width: 10%;
    }
  }
  margin: 30px 0;
`;

export const RowCustom = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  @media (max-width: 767px) {
    padding: 0 10vw;
  }
`;
