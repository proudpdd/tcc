import React from "react";
import MainTopicText from "modules/MainTopicText";
import PaginationTab from "modules/PaginationTab";
import { Container, Row, Col } from "react-bootstrap";
import { TopicText, Line, DetailText } from "./styled";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";
import girl1 from "modules/images/girl1.jpg";
import girl2 from "modules/images/girl2.jpg";
import man1 from "modules/images/man1.jpg";
import man2 from "modules/images/man2.jpg";
import ModalMember from 'modules/ModalMember'

export const HEADER_STATES = {
  HonorMember: 0,
};

const HeaderRender = ({ numHeader, name, status }) => {
  const renderHeader = () => {
    if (numHeader === 0) {
      return <MainTopicText state={LANGUAGE_STATE_M.Thai} name={name} />;
    } else {
      return (
        <div style={{ margin: "50px 0" }}>
          <TopicText>THE 27TH BOARD OF DIRECTORS</TopicText>
          <Line />
          <DetailText>{name}</DetailText>
        </div>
      );
    }
  };
  return (
    <Container>
      <div>{renderHeader()}</div>
      <Row md={4}>
        <Col xs={12}>
          <ModalMember pic={girl1} surname="suvanee" lastname="clyea" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={girl2} surname="marinee" lastname="yotiieosldjvpd" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man1} surname="madaya" lastname="dkfjliidoosnns" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man2} surname="yadama" lastname="dpoppoppopop" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={girl1} surname="suvanee" lastname="clyea" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={girl2} surname="marinee" lastname="yotiieosldjvpd" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man1} surname="madaya" lastname="dkfjliidoosnns" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man2} surname="yadama" lastname="dpoppoppopop" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={girl1} surname="suvanee" lastname="clyea" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={girl2} surname="marinee" lastname="yotiieosldjvpd" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man1} surname="madaya" lastname="dkfjliidoosnns" />
        </Col>
        <Col xs={12}>
          <ModalMember pic={man2} surname="yadama" lastname="dpoppoppopop" />
        </Col>
      </Row>
      <PaginationTab />
    </Container>
  );
};

export default HeaderRender;
