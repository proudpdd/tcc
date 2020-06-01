import styled from "styled-components";
import { Container } from "react-bootstrap";

export const PicBox = styled.img`
  width: 90%;
  height: 90%;
`;

export const Head1 = styled.div`
  font-family: promptLight;
  color: #0a2980;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
`;
export const Head2 = styled(Head1)`
  font-size: 16px;
`;

export const DetailAbout = styled.div`
  font-family: promptLight;
  font-size: 16px;
  margin: 20px 0 20px 0;
`;

export const ButtonTab = styled.div`
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Circle = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  @media (max-width: 320px) {
    width: 200px;
    height: 200px;
  }
`;

export const ButtonEconomic = styled.div`
  height: 80px;
  width: 100%;
  background-image: linear-gradient(#fdd600, #fab53a);
  color: #fff;
  font-family: promptLight;
  font-weight: bold;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const PicBoxEconomic = styled.img`
  width: 100%;
  height: 350px;
  margin-bottom: 25px;
`;

export const BottonTabAn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const PicBoxMedia = styled(PicBoxEconomic)`
  height: 95%;
`;

export const BackgroundMember = styled.div`
  background-color: #b9ab60;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
`;

export const ContainerCustom = styled(Container)`
  margin-bottom: 70px;
`;

export const ButtonTabMember = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const BackgroundInfo = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  background-color: #b9ab60;
  @media (min-width: 768px) {
    background: linear-gradient(#fff 25%, #b9ab60 25%);
  }
`;

export const ButtonTry = styled.div`
  position: relative;
  text-align: center;
  top: 20px;
`;

export const NewsTextContainer = styled.div`
  position: relative;
  color: #fff;
  background-color: #fff;
  z-index: 4;
`;

export const NewsText = styled.div`
  position: absolute;
  bottom: 30px;
  left: 10px;
`;
