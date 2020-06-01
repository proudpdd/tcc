import styled from "styled-components";

export const TopicBox = styled.div`
  width: 100%;
  height: 7vw;
  margin: 30px 0;
  position: relative;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

export const PicBox = styled.img`
  width: 100%;
  height: 7vw;
  position: absolute;
`;

export const TextBox = styled.div`
  font-family: promptLight;
  height: fit-content;
  width: 100%;
  text-align: center;
  font-size: 24px;
  top: 1.735vw;
  @media (min-width: 600px) {
    font-size: 30px;
  }
  @media (max-width: 991px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
    top: -4px;
  }
  color: #918338;
  z-index: 2;
  position: absolute;
`;

export const TextBox2 = styled(TextBox)`
    font-family: cinzel;
    letter-spacing: 5px;
`