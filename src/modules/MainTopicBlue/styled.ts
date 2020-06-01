import styled from "styled-components";

export const TopicBox = styled.div`
  width: 100%;
  height: 8vw;
  text-align: center;
  position: relative;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

export const PicBox = styled.img`
  width: 80vw;
  height: 7vw;
`;

export const TextBox = styled.div`
  font-family: promptLight;
  height: fit-content;
  width: 100%;
  text-align: center;
  font-size: 2vw;
  @media (max-width: 767px) {
    font-size: 20px;
    top: 0.1vw;
  }
  @media (max-width: 375px) {
    font-size: 20px;
    top: -2vw;
  }
  color: #0a2980;
  position: absolute;
  top: 1.5vw;
  z-index: 2;
`;

export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`