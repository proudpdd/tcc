import React from "react";
import CarouselMain from "modules/CarouselMain";
import { Container, Row, Col } from "react-bootstrap";
import MainTopicText from "modules/MainTopicText";
import PaginationTab from "modules/PaginationTab";
import NewsCard from "modules/NewsCard";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";

const RenderPage = ({ namePage }) => {
  return (
    <div>
      <CarouselMain />
      <Container>
        <MainTopicText state={LANGUAGE_STATE_M.Thai} name={namePage} />
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
          <Col xs={12}>
            <NewsCard nameTopic="Last chance for Thai Airways, says PM" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Last chance for Thai Airways, says PM" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="Last chance for Thai Airways, says PM" />
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

export default RenderPage;
