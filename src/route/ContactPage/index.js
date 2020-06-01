import React from "react";
import MainTopicText from "modules/MainTopicText";
import { FormCustom, MapBox, ButtonTab, Butt } from "./styled";
import { Form, Container, Row, Col } from "react-bootstrap";
import ButtonPush from "modules/ButtonPush";
import map from "modules/images/map.jpg";

const ContactPage = () => {
  return (
    <div>
      <Container>
        <MainTopicText name="CONTACT" />
        <Row className="justify-content-md-center">
          <Col md={{ span: 8 }}>
            <FormCustom>
              <Form.Control size="lg" type="text" placeholder="Email" />
              <br />
              <Form.Control size="lg" type="text" placeholder="Name" />
              <br />
              <Form.Control size="lg" type="text" placeholder="Subject" />
              <br />
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="6" placeholder="Detail" />
              </Form.Group>
            </FormCustom>
          </Col>
        </Row>
        <Container>
          <ButtonTab>
            <Butt>
              <ButtonPush name="SEND" />
              <ButtonPush name="MAP" />
            </Butt>
          </ButtonTab>
        </Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 12 }}>
            <MapBox src={map} alt="MapBox" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
