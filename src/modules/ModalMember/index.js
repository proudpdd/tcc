import React from "react";
import { Container } from "react-bootstrap";
import MemberDetailCard, { PAGE_STATE } from "modules/MemberDetailCard";
import {
  Box,
  WhiteTab,
  LogoBox,
  ModalCustom,
  PicBox,
  ProfileBox,
  Line,
  WhiteTab2,
  Box2,
  BoxFooter,
  SocialPic,
  TextSocial,
  SubSocialBox,
  EngText,
  HeaderMobile,
  CloseBut,
} from "./styled";
import logo from "modules/TopicNav/images/logo.svg";
import phone2 from "modules/images/phone2.svg";
import fax2 from "modules/images/fax2.svg";
import mail2 from "modules/images/mail2.svg";
import Mediaquery from "react-responsive";
import MemberCard from "modules/MemberCard";

const ModalMember = ({
  surnameEng,
  lastnameEng,
  status,
  pic,
  surnameThai,
  lastnameThai,
  nameChi,
  positionChi,
  positionThai,
  positionEng,
  companyThai,
  companyEng,
  companyChi,
  BusinessThai,
  BusinessEng,
  BusinessChi,
  ComPositionThai,
  ComPositionEng,
  ComPositionChi,
  email,
  phone,
  companyPhone,
  locationThai,
  locationEng,
}) => {
  const [modalShow, setModalShow] = React.useState(false);

  const MyVerticallyCenteredModal = (props) => {
    return (
      <ModalCustom
        closeButton
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Box>
          <Mediaquery minWidth={992}>
            <CloseBut closeButton>
              <WhiteTab>
                <LogoBox src={logo} alt="logo" />
                <div>
                  <div style={{ letterSpacing: "2px" }}>
                    THAI - CHINESE CHAMBER OF COMMERCE
                  </div>
                  <EngText>THE 26TH BOARD OF DIRECTORS</EngText>
                </div>
              </WhiteTab>
            </CloseBut>
            <Box2>
              <div style={{ display: "flex", marginLeft: '30px' }}>
                <PicBox src={pic} alt="modalpic" />
                <div>
                  <div style={{ margin: "20px" }}>
                    <div style={{ fontWeight: "bold" }}>{nameChi}</div>
                    <div style={{ fontWeight: "bold" }}>
                      {surnameThai} {lastnameThai}
                    </div>
                    <div style={{ fontFamily: "cinzel", fontSize: "25px" }}>
                      {surnameEng} {lastnameEng}
                    </div>
                  </div>
                  <div style={{ margin: "20px", fontSize: "20px" }}>
                    <div>{positionChi}</div>
                    <div>{positionThai}</div>
                    <div>{positionEng}</div>
                  </div>
                </div>
              </div>
            </Box2>
          </Mediaquery>

          <Mediaquery maxWidth={991}>
            <HeaderMobile>
              <CloseBut closeButton>
                <LogoBox src={logo} alt="logo" />
                <div>
                  <div style={{ letterSpacing: "2px" }}>
                    THAI - CHINESE CHAMBER OF COMMERCE
                  </div>
                </div>
              </CloseBut>
            </HeaderMobile>
            <Container>
              <EngText>THE 26TH BOARD OF DIRECTORS</EngText>
              <div style={{ display: "flex", marginLeft: '15px' }}>
                <ProfileBox>DIRECTOR</ProfileBox>
                <Line />
              </div>
              <WhiteTab2>
                <div style={{ textAlign: "center" }}>
                  <PicBox src={pic} alt="modalpic" />
                </div>
                <Container>
                  <WhiteTab2>
                    <div style={{ fontWeight: "bold" }}>{nameChi}</div>
                    <div style={{ fontWeight: "bold" }}>
                      {surnameThai} {lastnameThai}
                    </div>
                    <div style={{ fontFamily: "cinzel", fontSize: "18px" }}>
                      {surnameEng} {lastnameEng}
                    </div>
                  </WhiteTab2>
                  <div style={{ fontSize: "20px" }}>{positionChi}</div>
                  <div style={{ fontSize: "20px" }}>{positionThai}</div>
                  <div style={{ fontSize: "18px" }}>{positionEng}</div>
                </Container>
              </WhiteTab2>
            </Container>
          </Mediaquery>

          <Container>
            <div>
              <div style={{ display: "flex", marginLeft: '15px' }}>
                <ProfileBox>PROFILE</ProfileBox>
                <Line />
              </div>
              <MemberDetailCard
                PageState={PAGE_STATE.modal}
                surnameThai={surnameThai}
                lastnameThai={lastnameThai}
                surnameEng={surnameEng}
                lastnameEng={lastnameEng}
                nameChi={nameChi}
                phone={phone}
                companyPhone={companyPhone}
                email={email}
                companyThai={companyThai}
                companyEng={companyEng}
                companyChi={companyChi}
                BusinessThai={BusinessThai}
                BusinessEng={BusinessEng}
                BusinessChi={BusinessChi}
                ComPositionThai={ComPositionThai}
                ComPositionEng={ComPositionEng}
                ComPositionChi={ComPositionChi}
                locationThai={locationThai}
                locationEng={locationEng}
              />
            </div>
          </Container>

          <BoxFooter>
            <SubSocialBox>
              <TextSocial>
                <SocialPic src={phone2} alt="phone2" />
                <div>{phone}</div>
              </TextSocial>
              <TextSocial>
                <SocialPic src={fax2} alt="fax2" />
                <div>{companyPhone}</div>
              </TextSocial>
              <TextSocial>
                <SocialPic src={mail2} alt="mail2" />
                <div>{email}</div>
              </TextSocial>
            </SubSocialBox>
          </BoxFooter>
        </Box>
      </ModalCustom>
    );
  };

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <MemberCard
          surname={surnameEng}
          lastname={lastnameEng}
          pic={pic}
          status={status}
        />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ModalMember;
