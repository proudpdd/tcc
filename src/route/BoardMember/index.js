import React from "react";
import SecondTopicText from "modules/SecondTopicText";
import { Container, Row, Col, Form } from "react-bootstrap";
import { LANGUAGE_STATE_S } from "modules/SecondTopicText";
import {
  PicBox,
  HeadBox,
  TextBox,
  Box,
  HeaderBox,
  HeadPicBox,
  FormCustom,
} from "./styled";
import background from "modules/images/background.jpg";
import head from "modules/images/head.png";
import FooterMember from "modules/FooterMember";
import ModalMember from "modules/ModalMember";
import axios from "axios";

class BoardMember extends React.Component {
  state = {
    broadMembers: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://backoffice.thaicc.org/Backoffice/ApiArea/Profile?menu=ทำเนียบคณะกรรมการ`
      )
      .then((res) => {
        const broadMembers = res.data;
        this.setState({ broadMembers });
      });
  }

  render() {
    return (
      <div>
        <div style={{ marginBottom: "50px" }}>
          <HeaderBox>
            <div>THE 27TH</div>
            <div>BOARD OF DIRECTORS</div>
            <FormCustom>
              <Form.Control>
                {/* <img src={search} alt="search" /> */}
              </Form.Control>
            </FormCustom>
          </HeaderBox>

          {this.state.broadMembers
            .filter(
              (broadMember) => broadMember.profileposition_en === "President"
            )
            .map((President) => (
              <div>
                <Box>
                  <HeadPicBox src={President.url_img} alt="broadPic" />
                </Box>
                <HeaderBox>
                  <div style={{ fontFamily: "promptLight" }}>
                    {President.name_th} {President.lastname_th}
                  </div>
                  <div style={{ fontSize: "20px" }}>
                    {President.name_en} {President.lastname_en}
                  </div>
                  <div style={{ letterSpacing: "10px" }}>
                    {President.profileposition_en}
                  </div>
                </HeaderBox>
              </div>
            ))}
        </div>
        <Container>
          <SecondTopicText state={LANGUAGE_STATE_S.Eng} name="VICE PRESIDENT" />
          <Row md={4}>
            {this.state.broadMembers
              .filter(
                (broadMember) =>
                  broadMember.profileposition_en === "Vice President"
              )
              .map((vicePresident) => (
                <Col xs={12}>
                  <ModalMember
                    surnameEng={vicePresident.name_en}
                    lastnameEng={vicePresident.lastname_en}
                    pic={vicePresident.url_img}
                    surnameThai={vicePresident.name_th}
                    lastnameThai={vicePresident.lastname_th}
                    nameChi={vicePresident.name_cn}
                    positionChi={vicePresident.profileposition_cn}
                    positionThai={vicePresident.profileposition_th}
                    positionEng={vicePresident.profileposition_en}
                    companyThai={vicePresident.company_th}
                    companyEng={vicePresident.company_en}
                    companyChi={vicePresident.company_cn}
                    BusinessThai={vicePresident.business_th}
                    BusinessEng={vicePresident.business_en}
                    BusinessChi={vicePresident.business_cn}
                    ComPositionThai={vicePresident.position_th}
                    ComPositionEng={vicePresident.position_en}
                    ComPositionChi={vicePresident.position_cn}
                    email={vicePresident.email}
                    phone={vicePresident.phone}
                    companyPhone={vicePresident.phone_company}
                    locationThai={vicePresident.location_th}
                    locationEng={vicePresident.location_en}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <Container>
          <SecondTopicText
            state={LANGUAGE_STATE_S.Eng}
            name="SECRETARY GENERAL &"
            SecondText="DEPUTY SECRETARY GENERAL"
          />
          <Row md={4}>
            {this.state.broadMembers
              .filter((broadMember) =>
                broadMember.profileposition_en.includes("Secretary General")
              )
              .map((SecretaryGeneral) => (
                <Col xs={12}>
                  <ModalMember
                    surnameEng={SecretaryGeneral.name_en}
                    lastnameEng={SecretaryGeneral.lastname_en}
                    pic={SecretaryGeneral.url_img}
                    surnameThai={SecretaryGeneral.name_th}
                    lastnameThai={SecretaryGeneral.lastname_th}
                    nameChi={SecretaryGeneral.name_cn}
                    positionChi={SecretaryGeneral.profileposition_cn}
                    positionThai={SecretaryGeneral.profileposition_th}
                    positionEng={SecretaryGeneral.profileposition_en}
                    companyThai={SecretaryGeneral.company_th}
                    companyEng={SecretaryGeneral.company_en}
                    companyChi={SecretaryGeneral.company_cn}
                    BusinessThai={SecretaryGeneral.business_th}
                    BusinessEng={SecretaryGeneral.business_en}
                    BusinessChi={SecretaryGeneral.business_cn}
                    ComPositionThai={SecretaryGeneral.position_th}
                    ComPositionEng={SecretaryGeneral.position_en}
                    ComPositionChi={SecretaryGeneral.position_cn}
                    email={SecretaryGeneral.email}
                    phone={SecretaryGeneral.phone}
                    companyPhone={SecretaryGeneral.phone_company}
                    locationThai={SecretaryGeneral.location_th}
                    locationEng={SecretaryGeneral.location_en}
                  />
                </Col>
              ))}
          </Row>
        </Container>
        <HeadBox src={head} alt="head" />
        <Box>
          <TextBox>
            <FooterMember />
          </TextBox>
          <PicBox src={background} alt="background" />
        </Box>
      </div>
    );
  }
}

export default BoardMember;
