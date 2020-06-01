import React from "react";
import CarouselMain from "modules/CarouselMain";
import MainTopicText from "modules/MainTopicText";
import PaginationTab from "modules/PaginationTab";
import { Container, Row, Col } from "react-bootstrap";
import NewsCard from "modules/NewsCard";
import test from "modules/images/test.jpg";
import facebook from "modules/images/facebook.svg";
import twitter from "modules/images/twitter.svg";
import line from "modules/images/line.svg";
import Mediaquery from "react-responsive";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";
import {
  PicBox,
  Card,
  Topic,
  UnderLineBox,
  RedLine,
  BlackLine,
  BodyBox,
  ShareBox,
  ButtonCustom,
  SocialPic,
} from "./styled";

const MediaPage = ({ nameTopicM }) => {
  return (
    <div>
      <CarouselMain />
      <Container>
        <MainTopicText state={LANGUAGE_STATE_M.Eng} name="MEDIA" />
        <Row>
          <Col>
            <PicBox src={test} alt="video" />
            <Card>
              <Topic>
                <div>sofuf9uvdfvu</div>
                <UnderLineBox>
                  <RedLine />
                  <BlackLine />
                </UnderLineBox>
              </Topic>

              <Mediaquery minWidth={1024}>
                <ShareBox>
                  <div>1 เม.ย 2563</div>
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

              <BodyBox>
                Stores that fail to enforce disease control measures warned they
                will be ordered closed, however big they are, after hectic
                scenes as people rushed to buy booze when the ban was lifted in
                most provinces.
              </BodyBox>
            </Card>
          </Col>
        </Row>
        <Row md={4}>
          <Col xs={12}>
            <NewsCard nameTopic="sjdkasjdcbskjhdcbsjhdcbdjhcb" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Closure threat" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Last chance for Thai Airways, says PM" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Bayer Thailand donates 2 million baht to support the fight against COVID-19" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Russians caught partying on Koh Phangan" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="THAILAND1 new Covid case " />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="False positives" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Last chance for Thai Airways, says PM" />
          </Col>
        </Row>
      </Container>
      <PaginationTab />
    </div>
  );
};

export default MediaPage;
