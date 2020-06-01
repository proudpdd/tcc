import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  color: #0a2980;
  font-family: cinzel;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-bottom: 1px solid #fff;
  z-index: 1;
  width: 90%;
  height: 425px;
  @media (max-width: 767px) {
    height: 375px;
  }
`;

export const PicBox = styled.img`
  width: 100%;
  height: 475px;
  position: relative;
  top: 2px;
  @media (max-width: 767px) {
    height: 425px;
  }
`;

export const HeadBox = styled.img`
  width: 100%;
  position: relative;
  top: 8.33vw;
  z-index: 1;
`;

export const HeaderBox = styled.div`
  width: 100%;
  color: #0a2980;
  font-size: 40px;
  height: fit-content;
  margin: 50px 0 20px 0;
  text-align: center;
  font-family: cinzel;
`;
export const HeadPicBox = styled.img`
  width: 300px;
  height: 400px;
`;
export const FormCustom = styled(Form)`
  .form-control {
    border-radius: 20px;
    border: 2px solid #0a2980;
    color: #000;
    font-family: promptLight;
    font-size: 18px;
    width: 300px;
  }
  margin: 15px 0;
  display: flex;
  justify-content: center;
`;
