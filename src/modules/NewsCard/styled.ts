import styled from "styled-components";

export const PicBox = styled.img`
  width: 100%;
  height: 180px;
`;

export const Card = styled.div`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 15px;
`;

export const BodyBox = styled.div`
  font-family: "promptLight";
`;

export const Topic = styled.div`
  font-family: "promptLight";
  font-size: 20px;
  color: #918338;
  font-weight: bold;
  margin: 10px 0 10px 0;
  @media (max-width: 767px) {
        font-size: 16px;
	}
`;

export const RedLine = styled.div`
    background-color: #a00a08;
    height: 2.2px;
    width: 110px;
    bottom: 0;
    position: relative;
`

export const BlackLine = styled.div`
    background-color: #000;
    height: 2.2px;
    width: 20px;
    position: relative;
`
export const UnderLineBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 135px;
    margin-top: 7px;
`