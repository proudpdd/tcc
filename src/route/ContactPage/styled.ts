import styled from "styled-components";
import { Form } from "react-bootstrap";

export const FormCustom = styled(Form)`
  .form-control {
    border-radius: 20px;
    border: 1px solid #0a2980;
    color: #000;
    font-family: promptLight;
    font-size: 21px;
    width: 50%;
  }
`;

export const MapBox = styled.img`
  border-radius: 2.08vw;
  width: 100%;
  margin: 15px 0 30px 0;
  @media (min-width: 768px) {
    height: 37.4vw;
  }
  @media (max-width: 767px) {
    height: 250px;
  }
  @media (max-width: 424px) {
    height: 200px;
  }
`;
export const ButtonTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Butt = styled.div`
  display: flex;
  justify-content: space-between;
  width: 290px;
`;
