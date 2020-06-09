import React from "react";
import SecondTopicText from "modules/SecondTopicText";
import MainTopicText from "modules/MainTopicText";
import ReactPlayer from "react-player";
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
  HomeButton,
  TextButton,
  Picdiv,
  Buttondiv,
  VideoPic,
  PicImg,
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
import test from "modules/images/test.jpg";
import Mediaquery from "react-responsive";
import NewsCard from "modules/NewsCard";
import CarouselMain from "modules/CarouselMain";
import pesident from "modules/images/pesident.svg";
import BlueButton from "modules/images/BlueButton.svg";
import yellowButton from "modules/images/yellowButton.svg";

const HomePage = () => {
  const history = useHistory();
  const OnClickActivity = () => {
    history.push({ pathname: "/activity" });
  };

  const OnClickInfo = () => {
    history.push({ pathname: "/news" });
  };

  const OnClickMedia = () => {
    history.push({ pathname: "/media" });
  };

  const OnClickAbout = () => {
    history.push({ pathname: "/about" });
  };

  const OnClickMember = () => {
    history.push({ pathname: "/boardMember" });
  };

  const OnClickConfident = () => {
    history.push({ pathname: "/confident" });
  };

  const OnClickThaiInvest = () => {
    history.push({ pathname: "/ThaiInvest" });
  };

  const OnClickChineseInvest = () => {
    history.push({ pathname: "/ChineseInvest" });
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
          <Mediaquery minWidth={768}>
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
          </Mediaquery>
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

          <Mediaquery minWidth={992}>
            <Row>
              <Col md={{ span: 9 }} style={{ marginBottom: "15px" }}>
                <VideoPic>
                  <ReactPlayer
                    style={{ position: "absolute", top: "0", left: "0" }}
                    playing
                    controls
                    url="https://www.youtube.com/watch?v=i_O8RSYPaQM"
                    width="100%"
                    height="100%"
                  />
                </VideoPic>
                <DetailAbout style={{ marginTop: "10", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis sodales non vitae
                  lorem. In laoreet nunc in vestibulum posuere. sidjcodsif
                  oidfjvoos osidcjoi iosjdvoi dj osdivjofdi
                </DetailAbout>
              </Col>
              <Col md={{ span: 3 }} onClick={OnClickMedia}>
                <Col style={{ marginBottom: "10px" }}>
                  <PicImg src={test} alt="videoPic" />
                  <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                    Sed sit amet ligula eget eros venenatis
                  </DetailAbout>
                </Col>
                <Col style={{ marginBottom: "10px" }}>
                  <PicImg src={test} alt="videoPic" />
                  <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                    Sed sit amet ligula eget eros venenatis
                  </DetailAbout>
                </Col>
                <Col style={{ marginBottom: "10px" }}>
                  <PicImg src={test} alt="videoPic" />
                  <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                    Sed sit amet ligula eget eros venenatis
                  </DetailAbout>
                </Col>
              </Col>
            </Row>
          </Mediaquery>

          <Mediaquery maxWidth={991}>
            <Row>
              <Col style={{ marginBottom: "15px" }}>
                <VideoPic>
                  <ReactPlayer
                    style={{ position: "absolute", top: "0", left: "0" }}
                    playing
                    controls
                    url="https://www.youtube.com/watch?v=i_O8RSYPaQM"
                    width="100%"
                    height="100%"
                  />
                </VideoPic>
                <DetailAbout style={{ marginTop: "10", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis sodales non vitae
                  lorem. In laoreet nunc in vestibulum posuere. sidjcodsif
                  oidfjvoos osidcjoi iosjdvoi dj osdivjofdi
                </DetailAbout>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px", display: "flex" }}>
              <Col>
                <PicImg src={test} alt="videoPic" />
              </Col>
              <Col>
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis
                </DetailAbout>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px", display: "flex" }}>
              <Col>
                <PicImg src={test} alt="videoPic" />
              </Col>
              <Col>
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis
                </DetailAbout>
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px", display: "flex" }}>
              <Col>
                <PicImg src={test} alt="videoPic" />
              </Col>
              <Col>
                <DetailAbout style={{ margin: "0", color: "#0a2980" }}>
                  Sed sit amet ligula eget eros venenatis
                </DetailAbout>
              </Col>
            </Row>
          </Mediaquery>

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
            <Buttondiv onClick={OnClickConfident}>
              <ButtonEconomic src={yellowButton} alt="button" />
              <TextButton>
                <div>ดรรชนีความเชื่อมั่น</div>
                <div>หอการค้าไทยจีน</div>
              </TextButton>
            </Buttondiv>
          </Col>
          <Col xs={12}>
            <Buttondiv onClick={OnClickThaiInvest}>
              <ButtonEconomic src={yellowButton} alt="button" />
              <TextButton>การลงทุนในไทย</TextButton>
            </Buttondiv>
          </Col>
          <Col xs={12}>
            <Buttondiv onClick={OnClickChineseInvest}>
              <ButtonEconomic src={yellowButton} alt="button" />
              <TextButton>การลงทุนในจีน</TextButton>
            </Buttondiv>
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
                <Circle src={pesident} alt="broadmem" />
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
                <div
                  style={{
                    border: "1px solid #fff",
                    width: "33%",
                    margin: "10px 0 30px 0",
                  }}
                />
                <ButtonTabMember>
                  <div>
                    <Picdiv
                      style={{ width: "272.34px" }}
                      onClick={OnClickMember}
                    >
                      <HomeButton src={BlueButton} alt="button" />
                      <TextButton>ทำเนียบสมาชิก</TextButton>
                    </Picdiv>
                    <Picdiv style={{ width: "272.34px" }}>
                      <HomeButton src={BlueButton} alt="button" />
                      <TextButton>สมัครสมาชิก</TextButton>
                    </Picdiv>
                  </div>
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
