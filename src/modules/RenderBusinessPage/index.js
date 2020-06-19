import React, { useState, useEffect } from "react";
import MainTopicText from "modules/MainTopicText";
import ThirdTopicText from "modules/ThirdTopicText";
import test from "modules/images/test.jpg";
import facebook from "modules/images/facebook.svg";
import twitter from "modules/images/twitter.svg";
import line from "modules/images/line.svg";
import Mediaquery from "react-responsive";
import { LANGUAGE_STATE_D } from "modules/DetailText";
import { Container, Row, Col } from "react-bootstrap";
import {
  PicBox,
  ShareBox,
  SocialPic,
  ButtonCustom,
  ButtonDate,
  Detail,
  Picrow,
  Picinrow,
} from "./styled";
import DetailText from "modules/DetailText";
import NewsCard from "modules/NewsCard";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";
import CarouselMain from "modules/CarouselMain";
import axios from "axios";

const RenderBusinessPage = ({ namePage, DetailNews }) => {
  const [activity, setactivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        "Content-type": "application/json",
        url: "http://backoffice.thaicc.org/ApiArea/Activitynews",
      });
      setactivity(result.data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Container>
        {DetailNews ? null : (
          <MainTopicText state={LANGUAGE_STATE_M.Thai} name="เศรษฐกิจธุรกิจ" />
        )}
        <Row>
          <Col lg>
            <ThirdTopicText name={namePage} />

            <Mediaquery minWidth={1024}>
              <ShareBox>
                <ButtonDate>
                  <div>1-4-2563</div>
                </ButtonDate>
                <ButtonCustom style={{ backgroundColor: "#3B5999" }}>
                  <SocialPic src={facebook} alt="facebook" />
                  <div>แชร์</div>
                </ButtonCustom>
                <ButtonCustom style={{ backgroundColor: "#03A9F4" }}>
                  <SocialPic src={twitter} alt="twitter" />
                  <div>Tweet</div>
                </ButtonCustom>
                <ButtonCustom style={{ backgroundColor: "#00c300" }}>
                  <SocialPic src={line} alt="line" />
                  <div>แชร์</div>
                </ButtonCustom>
              </ShareBox>
            </Mediaquery>

            <PicBox src={test} alt="video" />
            <Detail>
              Lorem ipsum has become the industry standard for design mockups
              and prototypes. By adding a little bit of Latin to a mockup,
              you’re able to show clients a more complete version of your design
              without actually having to invest time and effort drafting copy.
              But despite all its benefits, seeing the same random Latin text in
              every design can get a little boring for you and your clients. So
              if you have a client who’s got a sense of humor or if you’re just
              tired of going the traditional route in your mockups, here are 15
              creative and funny lorem ipsum text generators that are sure to
              lighten the mood at any client meeting.
            </Detail>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginBottom: "20px" }}>
        <CarouselMain Page="true" />
        <Picrow>
          <Picinrow src={test} alt="fisrtSlide" />
          <Picinrow src={test} alt="secondSlide" />
          <Picinrow src={test} alt="thirdSlide" />
        </Picrow>
      </Container>
      <Container>
        <DetailText state={LANGUAGE_STATE_D.Thai} name="ข่าวที่น่าสนใจ" />
        <Row md={4}>
          <Col xs={12}>
            <NewsCard nameTopic="sdcch" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sdcch" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sdcch" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sdcch" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RenderBusinessPage;
