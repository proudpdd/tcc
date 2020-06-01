import styled from "styled-components";

export const TopicBox = styled.div`
  width: 100%;
  margin: 20px 0;
  @media (min-width: 1200px) {
    height: 7vw;
    position: relative;
  }
`;

export const PicBox = styled.img`
  width: 100%;
  @media (min-width: 1200px) {
    height: 7vw;
    position: absolute;
  }
`;

export const TextBox = styled.div`
  font-family: promptLight;
  height: fit-content;
  width: 100%;
  text-align: center;
  font-size: 30px;
  @media (max-width: 767px) {
    top: -17px;
  }
  @media (min-width: 1024px) {
    top: 6px;
  }
  @media (min-width: 1440px) {
    top: 1.5vw;
  }
  color: #0a2980;
  z-index: 1;
  @media (min-width: 1200px) {
    position: absolute;
  }
`;

export const TextBox2 = styled(TextBox)`
  font-family: cinzel;
  letter-spacing: 5px;
`;
