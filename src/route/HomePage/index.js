import React from "react";
import SecondTopicText from "modules/SecondTopicText";
import MainTopicText from "modules/MainTopicText";
import NewsCardHomePage from "modules/NewsCardHomePage";
import { LANGUAGE_STATE_S } from "modules/SecondTopicText";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";
import { Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {
  PicBox,
  Head1,
  Head2,
  DetailAbout,
  ButtonTab,
  Circle,
  ButtonEconomic,
  PicBoxEconomic,
  BottonTabAn,
  PicBoxMedia,
  BackgroundMember,
  ContainerCustom,
  ButtonTabMember,
  BackgroundInfo,
  ButtonTry,
  NewsText,
  NewsTextContainer,
} from "./styled";
import {
  Topic,
  UnderLineBox,
  RedLine,
  BlackLine,
  BodyBox,
} from "modules/NewsCard/styled";
import logo from "modules/TopicNav/images/logo.svg";
import ButtonPush from "modules/ButtonPush";
import HomeButton from "modules/HomeButton";
import test from "modules/images/test.jpg";
import Mediaquery from "react-responsive";
import NewsCard from "modules/NewsCard";
import CarouselMain from "modules/CarouselMain";
import man1 from "modules/images/man1.jpg";

const HomePage = () => {
  const history = useHistory();
  const OnClickActivity = () => {
    history.push({ pathname: "/tcc/activity" });
  };

  const OnClickInfo = () => {
    history.push({ pathname: "/tcc/news" });
  };

  const OnClickMedia = () => {
    history.push({ pathname: "/tcc/media" });
  };

  const OnClickAbout = () => {
    history.push({ pathname: "/tcc/about" });
  };

  const OnClickMember = () => {
    history.push({ pathname: "/tcc/boardMember" });
  };

  const OnClickConfident = () => {
    history.push({ pathname: "/tcc/confident" });
  };

  const OnClickThaiInvest = () => {
    history.push({ pathname: "/tcc/ThaiInvest" });
  };

  const OnClickChineseInvest = () => {
    history.push({ pathname: "/tcc/ChineseInvest" });
  };

  return (
    <div>
      <CarouselMain />
      <ContainerCustom>
        <MainTopicText state={LANGUAGE_STATE_M.Eng} name="HIGHLIGHT" />
        <Row>
          <Col md={{ span: 8 }}>
            <NewsTextContainer>
              <PicBoxEconomic
                style={{ height: "450px" }}
                src={test}
                alt="newsMedia"
              />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
                <BodyBox>
                  Stores that fail to enforce disease control measures warned
                  they will be ordered closed
                </BodyBox>
              </NewsText>
            </NewsTextContainer>
          </Col>
          <Col md={{ span: 4 }}>
            <NewsTextContainer>
              <PicBoxMedia
                style={{ height: "212.5px" }}
                src={test}
                alt="newsMedia"
              />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
            <NewsTextContainer>
              <PicBoxMedia
                style={{ height: "212.5px" }}
                src={test}
                alt="newsMedia"
              />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
          </Col>
        </Row>
        <Row md={4}>
          <Col xs={12}>
            <NewsCard nameTopic="sldif" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sldif" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sldif" />
          </Col>
          <Col xs={12}>
            <NewsCard nameTopic="sldif" />
          </Col>
        </Row>
      </ContainerCustom>
      <ContainerCustom>
        <SecondTopicText state={LANGUAGE_STATE_S.Thai} name="ข่าวกิจกรรม" />
        <Row>
          <Col md={{ span: 8 }}>
            <Row style={{ marginBottom: "20px" }}>
              <Col md={{ span: 4 }}>
                <PicBoxMedia src={test} alt="newsMedia" />
              </Col>
              <Col md={{ span: 8 }}>
                <Topic style={{ marginTop: "0" }}>
                  <div>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine />
                    <BlackLine />
                  </UnderLineBox> 
                </Topic>
                <BodyBox>
                  Stores that fail to enforce disease control measures warned
                  they will be ordered closed, however big they are
                </BodyBox>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <Col md={{ span: 4 }}>
                <PicBoxMedia src={test} alt="newsMedia" />
              </Col>
              <Col md={{ span: 8 }}>
                <Topic style={{ marginTop: "0" }}>
                  <div>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine />
                    <BlackLine />
                  </UnderLineBox>
                </Topic>
                <BodyBox>
                  Stores that fail to enforce disease control measures warned
                  they will be ordered closed, however big they are
                </BodyBox>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <Col md={{ span: 4 }}>
                <PicBoxMedia src={test} alt="newsMedia" />
              </Col>
              <Col md={{ span: 8 }}>
                <Topic style={{ marginTop: "0" }}>
                  <div>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine />
                    <BlackLine />
                  </UnderLineBox>
                </Topic>
                <BodyBox>
                  Stores that fail to enforce disease control measures warned
                  they will be ordered closed, however big they are
                </BodyBox>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <Col md={{ span: 4 }}>
                <PicBoxMedia src={test} alt="newsMedia" />
              </Col>
              <Col md={{ span: 8 }}>
                <Topic style={{ marginTop: "0" }}>
                  <div>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine />
                    <BlackLine />
                  </UnderLineBox>
                </Topic>
                <BodyBox>
                  Stores that fail to enforce disease control measures warned
                  they will be ordered closed, however big they are
                </BodyBox>
              </Col>
            </Row>
          </Col>
          <Mediaquery minWidth={768}>
            <Col md={{ span: 4 }}>
              <div id="fb-root"></div>
              <script
                async
                defer
                crossorigin="anonymous"
                src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v7.0"
              ></script>
              <div
                class="fb-page"
                data-href="https://m.facebook.com/ThaiChineseChamberofCommerce/"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://m.facebook.com/ThaiChineseChamberofCommerce/"
                  class="fb-xfbml-parse-ignore"
                >
                  <a href="https://m.facebook.com/ThaiChineseChamberofCommerce/">
                    Thai-Chinese Chamber of Commerce
                  </a>
                </blockquote>
              </div>
            </Col>
          </Mediaquery>
        </Row>
        <BottonTabAn onClick={OnClickActivity}>
          <ButtonPush name="MORE" />
        </BottonTabAn>
      </ContainerCustom>
      <div>
        <Container>
          <SecondTopicText
            state={LANGUAGE_STATE_S.Thai}
            name="ข่าวประชาสัมพันธ์"
          />
        </Container>
        <BackgroundInfo>
          <ContainerCustom>
            <Row md={3}>
              <Col xs={12}>
                <NewsCardHomePage nameTopic="sofcjod" />
              </Col>
              <Col xs={12}>
                <NewsCardHomePage nameTopic="sofcjod" />
              </Col>
              <Col xs={12}>
                <NewsCardHomePage nameTopic="sofcjod" />
              </Col>
            </Row>
            <ButtonTry onClick={OnClickInfo}>
              <ButtonPush name="MORE" />
            </ButtonTry>
          </ContainerCustom>
        </BackgroundInfo>
      </div>
      <div>
        <ContainerCustom>
          <MainTopicText state={LANGUAGE_STATE_M.Eng} name="MEDIA" />
          <Row>
            <Col md={{ span: 8 }} style={{ marginBottom: "15px" }}>
              <PicBoxEconomic
                style={{ height: "450px" }}
                src={test}
                alt="newsMedia"
              />
              <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                Sed sit amet ligula eget eros venenatis sodales non vitae lorem.
                In laoreet nunc in vestibulum posuere.
              </DetailAbout>
            </Col>
            <Col md={{ span: 4 }}>
              <Col style={{ marginBottom: "10px" }}>
                <PicBoxMedia src={test} alt="newsMedia" />
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis sodales non vitae
                  lorem.
                </DetailAbout>
              </Col>
              <Col style={{ marginBottom: "10px" }}>
                <PicBoxMedia src={test} alt="newsMedia" />
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis sodales non vitae
                  lorem.
                </DetailAbout>
              </Col>
              <Col style={{ marginBottom: "10px" }}>
                <PicBoxMedia src={test} alt="newsMedia" />
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis sodales non vitae
                  lorem.
                </DetailAbout>
              </Col>
            </Col>
          </Row>
          <BottonTabAn onClick={OnClickMedia}>
            <ButtonPush name="MORE" />
          </BottonTabAn>
        </ContainerCustom>
      </div>
      <ContainerCustom>
        <SecondTopicText
          state={LANGUAGE_STATE_S.Thai}
          name="เศรษฐกิจไทย - จีน"
        />
        <Row md={3}>
          <Col xs={12}>
            <ButtonEconomic>
              <div onClick={OnClickConfident} style={{ textAlign: "center" }}>
                <div>ดรรชนีความเชื่อมั่น</div>
                <div>หอการค้าไทยจีน</div>
              </div>
            </ButtonEconomic>
          </Col>
          <Col xs={12}>
            <ButtonEconomic onClick={OnClickThaiInvest}>
              การลงทุนในไทย
            </ButtonEconomic>
          </Col>
          <Col xs={12}>
            <ButtonEconomic onClick={OnClickChineseInvest}>
              การลงทุนในจีน
            </ButtonEconomic>
          </Col>
        </Row>
        <Row md={4}>
          <Col xs={12}>
            <NewsTextContainer>
              <PicBoxEconomic src={test} alt="newseco" />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
          </Col>
          <Col xs={12}>
            <NewsTextContainer>
              <PicBoxEconomic src={test} alt="newseco" />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
          </Col>
          <Col xs={12}>
            <NewsTextContainer>
              <PicBoxEconomic src={test} alt="newseco" />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
          </Col>
          <Col xs={12}>
            <NewsTextContainer>
              <PicBoxEconomic src={test} alt="newseco" />
              <NewsText>
                <Topic style={{ marginTop: "0" }}>
                  <div style={{ color: "#fff" }}>skdfndfvjn</div>
                  <UnderLineBox>
                    <RedLine style={{ backgroundColor: "#fdd600" }} />
                    <BlackLine style={{ backgroundColor: "#fff" }} />
                  </UnderLineBox>
                </Topic>
              </NewsText>
            </NewsTextContainer>
          </Col>
        </Row>
        <BottonTabAn>
          <ButtonPush name="MORE" />
        </BottonTabAn>
      </ContainerCustom>
      <ContainerCustom>
        <SecondTopicText state={LANGUAGE_STATE_S.Thai} name="สมาชิก" />
        <BackgroundMember>
          <Row>
            <Col md={{ span: 5 }}>
              <div style={{ textAlign: "center" }}>
                <Circle src={man1} alt="broadmem" />
              </div>
            </Col>
            <Col md={{ span: 6, offset: 1 }}>
              <div>
                <Head1 style={{ color: "#fff" }}>ณรงศักดิ์ พุทธมงคล</Head1>
                <Head2 style={{ color: "#fff" }}>
                  NARONGSAK PUTTHAPORNMONGKOL
                </Head2>
                <Head2 style={{ color: "#fff", fontWeight: "bold" }}>
                  ประธานหอการค้าไทย - จีน
                </Head2>
                <ButtonTabMember>
                  <div
                    style={{
                      border: "1px solid #fff",
                      width: "33%",
                      margin: "10px 0 30px 0",
                    }}
                  />
                  <div onClick={OnClickMember}>
                    <HomeButton name="ทำเนียบสมาชิก" />
                  </div>
                  <HomeButton name="สมัครสมาชิก" />
                </ButtonTabMember>
              </div>
            </Col>
          </Row>
        </BackgroundMember>
      </ContainerCustom>
      <ContainerCustom>
        <SecondTopicText state={LANGUAGE_STATE_S.Thai} name="เกี่ยวกับ" />
        <Row>
          <Col md={{ offset: 1, span: 4 }} style={{ textAlign: "center" }}>
            <PicBox src={logo} alt="logo" />
          </Col>
          <Col md={{ span: 6 }}>
            <Head1>THAI-CHINESE</Head1>
            <Head2>CHAMBER OF COMMERCE</Head2>
            <DetailAbout>
              eLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              lacinia varius nisi, quis elementum dolor malesuada non. Ut
              consequat, quam et viverra iaculis,eLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </DetailAbout>
            <ButtonTab onClick={OnClickAbout} style={{ marginBottom: "30px" }}>
              <ButtonPush name="MORE" />
            </ButtonTab>
          </Col>
        </Row>
      </ContainerCustom>
    </div>
  );
};

export default HomePage;
