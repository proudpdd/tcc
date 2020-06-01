import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const Box = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  font-family: promptLight;
`;

export const WhiteTab = styled.div`
  color: #0a2980;
  display: flex;
  align-items: center;
  font-size: 20px;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const LogoBox = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  @media (max-width: 991px) {
    width: 60px;
    height: 60px;
  }
`;

export const ModalCustom = styled(Modal)`
  padding-left: 0px;
  padding: 0;
`;

export const PicBox = styled.img`
  width: 220px;
  height: 300px;
  margin: 0 15px 20px 0;

  @media (max-width: 991px) {
    margin: 20px 0;
  }
  .modal-header .close {
    padding: 0.5rem 0.75rem 0 0;
  }
`;

export const ProfileBox = styled.div`
  background-color: #0a2980;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Line = styled.div`
  background-color: #0a2980;
  height: 2px;
  width: 100%;
  position: relative;
  top: 15px;
`;
export const WhiteTab2 = styled.div`
  text-align: left;
  font-size: 25px;
  color: #0a2980;
  margin-bottom: 20px;
`;

export const Box2 = styled.div`
  font-size: 30px;
  color: #0a2980;
  background: linear-gradient(180deg, #fdd600 50%, #fff 50%);
`;
export const BoxFooter = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdd600;
  height: fit-content;
`;

export const SocialPic = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 5px;
`;

export const SubSocialBox = styled.div`
  @media (min-width: 992px) {
    justify-content: space-between;
    display: flex;
    width: 80%;
  }
  margin: 5px 0;
`;

export const TextSocial = styled.div`
  display: flex;
  align-items: center;
`;

export const EngText = styled.div`
  font-family: cinzel;
  color: #0a2980;
  font-size: 25px;
  @media (max-width: 991px) {
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }
`;

export const HeaderMobile = styled.div`
  display: flex;
  align-items: center;
  background-color: #fdd600;
  color: #0a2980;
  font-size: 18px;
`;

export const CloseBut = styled(Modal.Header)`
  .close {
    font-size: 2.5rem;
    color: #000;
  }
`;

