import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  text-align: center;
  font-family: promptLight;
  font-weight: bold;
  font-size: 18px;
`;

export const TopicText = styled.div`
  font-size: 23px;
  border-bottom: 2px solid #0a2980;
  width: 300px;
  text-align: center;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const LinkCustom = styled(Link)`
  cursor: pointer;
  color: #0a2980;
  :hover {
    color: #0a2980;
    text-decoration: initial;
  }
`;
