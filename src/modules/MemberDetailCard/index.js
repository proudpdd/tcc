import React from "react";
import {
  Box,
  TextBox,
  LineBox,
  RedLine,
  BlueLine,
  StatusBox,
  BuildBox,
  BuildBox2,
  DetailBox,
  PicBox,
  InfoBox,
  CommuBox,
} from "./styled";
import { Container } from "react-bootstrap";
import phoneU from "modules/images/phone.svg";
import fax from "modules/images/fax.svg";
import mail from "modules/images/mail.svg";
import Mediaquery from "react-responsive";

export const PAGE_STATE = {
  memberTab: 0,
  modal: 1,
};

const MemberDetailCard = ({
  PageState,
  surnameThai,
  lastnameThai,
  surnameEng,
  lastnameEng,
  nameChi,
  phone,
  companyPhone,
  email,
  companyThai,
  companyEng,
  companyChi,
  BusinessThai,
  BusinessEng,
  BusinessChi,
  ComPositionThai,
  ComPositionEng,
  ComPositionChi,
  locationThai,
  locationEng,
}) => {
  const renderHeader = () => {
    return (
      <div>
        <TextBox>
          <div>{nameChi}</div>
          <div style={{ fontFamily: "promptLight" }}>
            {surnameThai} {lastnameThai}
          </div>
          <div style={{ fontFamily: "cinzel" }}>
            {surnameEng} {lastnameEng}
          </div>
        </TextBox>
        <LineBox>
          <RedLine />
          <BlueLine />
        </LineBox>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div>
        <Mediaquery minWidth={992}>
          <CommuBox>
            <InfoBox>
              <PicBox src={phoneU} alt="phone" />
              <div>{phone}</div>
            </InfoBox>
            <InfoBox>
              <PicBox src={fax} alt="phone" />
              <div>{companyPhone}</div>
            </InfoBox>
            <InfoBox>
              <PicBox src={mail} alt="phone" />
              <div>{email}</div>
            </InfoBox>
          </CommuBox>
        </Mediaquery>

        <Mediaquery maxWidth={991}>
          <StatusBox>
            <InfoBox>
              <PicBox src={phoneU} alt="phone" />
              <div>{phone}</div>
            </InfoBox>
            <InfoBox>
              <PicBox src={fax} alt="phone" />
              <div>{companyPhone}</div>
            </InfoBox>
            <InfoBox>
              <PicBox src={mail} alt="phone" />
              <div>{email}</div>
            </InfoBox>
          </StatusBox>
        </Mediaquery>
      </div>
    );
  };

  const renderPage = () => {
    return (
      <div>
        {PageState ? null : <div>{renderHeader()}</div>}

        <Mediaquery minWidth={992}>
          <StatusBox>
            <BuildBox>
              <div>{companyThai}</div>
              <div>{companyEng}</div>
              <div>{companyChi}</div>
            </BuildBox>
            <BuildBox2>
              <div>{ComPositionThai}</div>
              <div>{ComPositionEng}</div>
              <div>{ComPositionChi}</div>
            </BuildBox2>
          </StatusBox>
          <DetailBox>
            <div>ประเภทธุรกิจ : {BusinessThai}</div>
            <div>{BusinessEng}</div>
            <div>{BusinessChi}</div>
          </DetailBox>
        </Mediaquery>

        <Mediaquery maxWidth={991}>
          <StatusBox>
            <BuildBox>
              <div>{companyThai}</div>
              <div>{companyEng}</div>
              <div>{companyChi}</div>
            </BuildBox>
            <BuildBox2 style={{ marginBottom: "20px" }}>
              <div>{ComPositionThai}</div>
              <div>{ComPositionEng}</div>
              <div>{ComPositionChi}</div>
            </BuildBox2>
          </StatusBox>
          <DetailBox>
            <div>ประเภทธุรกิจ : {BusinessThai}</div>
            <div>{BusinessEng}</div>
            <div>{BusinessChi}</div>
          </DetailBox>
        </Mediaquery>

        <DetailBox>
          <div>{ComPositionThai}</div>
          <div>{ComPositionEng}</div>
          <div>{ComPositionChi}</div>
        </DetailBox>
        {PageState ? null : <div>{renderFooter()}</div>}
      </div>
    );
  };

  return (
    <Container>
      {PageState ? (
        <Box>{renderPage()}</Box>
      ) : (
        <Box style={{ borderBottom: "1px solid #b9ab60" }}>{renderPage()}</Box>
      )}
    </Container>
  );
};

export default MemberDetailCard;
