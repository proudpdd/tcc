import React from "react";
import background from "modules/images/background.jpg";
import head from "modules/images/head.png";
import {
  PicBox,
  HeadBox,
  Box,
  TextBox,
  Circle,
  PicNews,
  CarouselCustom,
  RowCustom,
} from "./styled";
import logo from "modules/TopicNav/images/logo.svg";
import DetailText from "modules/DetailText";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import MainTopicTextBlue from "modules/MainTopicBlue";
import test from "modules/images/test.jpg";
import { LANGUAGE_STATE_D } from "modules/DetailText";
import NewsCard from "modules/NewsCard";
import Mediaquery from "react-responsive";

const AboutPage = () => {
  return (
    <div>
      <Box>
        <PicBox src={background} alt="background" />
        <TextBox>
          <Container>
            <div style={{ textAlign: "center" }}>
              <MainTopicTextBlue name="เกี่ยวกับ" />
              <Circle src={logo} alt="logo" />
              <div style={{ fontWeight: "bold" }}>หอการค้าไทย - จีน</div>
              <div style={{ fontFamily: "cinzel" }}>
                THAI - CHINESE CHAMBER OF COMMERCE
              </div>
            </div>
          </Container>
        </TextBox>
      </Box>
      <HeadBox src={head} alt="headBackground" />

      <Container>
        <Row>
          <Col md={5}>
            <PicNews src={test} alt="DetailPic" />
          </Col>
          <Col md={{ span: 7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fermentum turpis tincidunt, consectetur tellus ut, pharetra enim. Ut
            a placerat diam. Ut consequat, purus nec mattis laoreet, urna libero
            vulputate magna, eu tincidunt est mi ac massa. Nunc at elit nec
            ligula egestas commodo. Donec non condimentum metus. Phasellus
            commodo, nulla a maximus gravida, augue ante molestie velit, vel
            congue diam massa et tortor. Quisque nec dapibus sapien. Praesent
            luctus nulla eu leo mattis fringilla. Curabitur porta pretium
            bibendum. Nullam mauris elit, volutpat vitae aliquam in,
            sollicitudin maximus lacus. Nam in neque lacus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean fermentum turpis
            tincidunt, consectetur tellus ut, pharetra enim.
          </Col>
          <Col md={{ span: 8 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fermentum turpis tincidunt, consectetur tellus ut, pharetra enim. Ut
            a placerat diam. Ut consequat, purus nec mattis laoreet, urna libero
            vulputate magna, eu tincidunt est mi ac massa. Nunc at elit nec
            ligula egestas commodo. Donec non condimentum metus. Phasellus
            commodo, nulla a maximus gravida, augue ante molestie velit, vel
            congue diam massa et tortor. Quisque nec dapibus sapien. Praesent
            luctus nulla eu leo mattis fringilla. Curabitur porta pretium
            bibendum. Nullam mauris elit, volutpat vitae aliquam in,
            sollicitudin maximus lacus. Nam in neque lacus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean fermentum turpis
            tincidunt, consectetur tellus ut, pharetra enim. Ut a placerat diam.
            Ut consequat, purus nec mattis laoreet Aenean fermentum turpis
            tincidunt, consectetur tellus ut, pharetra enim. Ut a placerat diam.
            Ut consequat, purus nec mattis laoreet,
          </Col>
          <Col md={4}>
            <PicNews src={test} alt="DetailPic" />
          </Col>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fermentum turpis tincidunt, consectetur tellus ut, pharetra enim. Ut
            a placerat diam. Ut consequat, purus nec mattis laoreet, urna libero
            vulputate magna, eu tincidunt est mi ac massa. Nunc at elit nec
            ligula egestas commodo. Donec non condimentum metus. Phasellus
            commodo, nulla a maximus gravida, augue ante molestie velit, vel
            congue diam massa et tortor. Quisque nec dapibus sapien. Praesent
            luctus nulla eu leo mattis fringilla. Curabitur porta pretium
            bibendum. Nullam mauris elit, volutpat vitae aliquam in,
            sollicitudin maximus lacus. Nam in neque lacus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Aenean fermentum turpis
            tincidunt, consectetur tellus ut, pharetra enim. Ut a placerat diam.
            Ut consequat, purus nec mattis laoreet, Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean fermentum turpis tincidunt,
            consectetur tellus ut, pharetra enim. Ut a placerat diam. Ut
            consequat, purus nec mattis laoreet, urna libero vulputate magna, eu
            tincidunt est mi ac massa. Nunc at elit nec ligula egestas commodo.
            Donec non condimentum metus. Phasellus commodo, nulla a maximus
            gravida, augue ante molestie velit, vel congue diam massa et tortor.
            Quisque nec dapibus sapien. Praesent luctus nulla eu leo mattis
            fringilla. Curabitur porta pretium bibendum. Nullam mauris elit,
            volutpat vitae aliquam in, sollicitudin maximus lacus. Nam in neque
            lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean fermentum turpis tincidunt, consectetur tellus ut, pharetra
            enim. Ut a placerat diam. Ut consequat, purus nec mattis laoreet,
          </Col>
        </Row>
      </Container>
      <Container>
        <DetailText
          state={LANGUAGE_STATE_D.Eng}
          name="CHAMBER OF COMMERCE NETWORK"
        />
      </Container>

      <Mediaquery minWidth={768}>
        <Container>
          <CarouselCustom>
            <Carousel.Item>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="one" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="two" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="three" />
                </Col>
              </RowCustom>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="four" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="five" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="six" />
                </Col>
              </RowCustom>
            </Carousel.Item>
            <Carousel.Item>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="one" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="two" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="three" />
                </Col>
              </RowCustom>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="four" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="five" />
                </Col>
                <Col xs={12}>
                  <NewsCard nameTopic="six" />
                </Col>
              </RowCustom>
            </Carousel.Item>
          </CarouselCustom>
        </Container>
      </Mediaquery>

      <Mediaquery maxWidth={767}>
        <CarouselCustom>
          <Carousel.Item>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="one" />
                </Col>
              </RowCustom>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="two" />
                </Col>
              </RowCustom>
            </Carousel.Item>
            <Carousel.Item>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="three" />
                </Col>
              </RowCustom>
              <RowCustom md={3}>
                <Col xs={12}>
                  <NewsCard nameTopic="four" />
                </Col>
              </RowCustom>
            </Carousel.Item>
        </CarouselCustom>
      </Mediaquery>
    </div>
  );
};

export default AboutPage;
