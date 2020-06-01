import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  margin-bottom: 30px;
  color: #0a2980;
`;

export const TextBox = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const RedLine = styled.div`
  background-color: #a00a08;
  height: 1px;
  width: 80%;
`;
export const BlueLine = styled.div`
  background-color: #0a2980;
  height: 1px;
  width: 15%;
`;

export const LineBox = styled.div`
  display: flex;
  width: 40%;
  height: fit-content;
  justify-content: space-between;
`;

export const StatusBox = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
  margin: 20px 0;
  width: 90%;
  justify-content: space-between;
`;

export const CommuBox = styled(StatusBox)`
  width: 650px;
  margin: 0;
`;

export const BuildBox = styled.div`
  width: 50%;
  border-right: 2px solid #0a2980;
  font-family: promptLight;
  font-size: 18px;
  @media (max-width: 992px) {
    border-right: 2px solid #fff;
    font-weight: bold;
    width: 100%;
  }
`;

export const BuildBox2 = styled(BuildBox)`
  border-color: #fff;
  padding-left: 20px;
  @media (max-width: 992px) {
    font-size: 16px;
    border-right: 2px solid #fff;
    font-weight: normal;
  }
`;

export const DetailBox = styled.div`
  font-family: promptLight;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const InfoBox = styled.div`
  display: flex;
  font-size: 16px;
  @media (min-width: 992px) {
    justify-content: space-between;
    margin: 20px 0;
  }
`;
export const PicBox = styled.img`
  height: 25px;
  padding-right: 10px;
`;
