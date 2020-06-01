import styled from "styled-components";

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
    @media (max-width: 767px){
        font-size: 18px;
    }
    @media (max-width: 360px){
        font-size: 16px;
    }
    padding-bottom: 20px;
`
export const Circle = styled.img`
    width: 19.53vw;
    height: 19.53vw;
    border-radius: 50%;
    background-color: #fff;
    margin-bottom: 25px;
`

export const PicNews = styled.img`
    width: 100%;
    height: 80%;
`