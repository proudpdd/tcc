import styled from "styled-components";

export const TopicBox = styled.div`
  margin-bottom: 30px;
`;

export const PicBox = styled.img`
  width: 100%;
`;

export const TextBox = styled.div`
  font-family: promptLight;
  font-weight: bold;
  color: #b9ab60;
  font-size: 25px;
  @media (max-width: 1024px) {
    top: 3.9vw;
  }
  top: 40px;

  position: relative;
`;

export const TextBox2 = styled(TextBox)`
  font-family: cinzel;
  letter-spacing: 5px;
`;
