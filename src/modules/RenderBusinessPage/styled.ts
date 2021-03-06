import styled from "styled-components";

export const PicBox = styled.img`
  width: 100%;
  margin: 20px 0;
`;

export const ShareBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  font-family: "promptLight";
  position: relative;
`;

export const ButtonCustom = styled.div`
  width: fit-content;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-right: 20px;
`;

export const SocialPic = styled.img`
  height: 20px;
  margin: 0 10px 0 10px;
`;

export const ButtonDate = styled(ButtonCustom)`
  border: 2px solid #b9ab60;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0px;
  width: 90px;
  color: #0a2980;
`;

export const Detail = styled.div`
  font-family: promptLight;
  margin-bottom: 25px;
`;

export const Picrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Picinrow = styled.img`
  width: 70px;
  height: auto;
  margin-right: 5px;
`