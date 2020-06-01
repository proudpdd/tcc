import React from "react";
import {
  WhiteBox,
  Box,
  LanBox,
  SocialBox,
  BigSocialBox,
  ChineseTopic,
  PicBox,
  ThaiTopic
} from "./styled";
import youtube from "./images/youtube.svg";
import line from "./images/line.svg";
import ig from "./images/ig.svg";
import facebook from "./images/facebook.svg";
import logo from "./images/logo.svg";

const TopicNav = () => {
  return (
    <WhiteBox>
      <div style={{ display: 'flex' }}>
        <PicBox src={logo} alt="logo" />
        <Box style={{ marginLeft: "10px" }}>
          <ChineseTopic>泰国中华总商会</ChineseTopic>
          <ThaiTopic>THAI - CHINESE CHAMBER OF COMMERCE</ThaiTopic>
        </Box>
      </div>
      <div style={{ display: "flex" }}>
        <Box style={{ marginRight: "20px" }}>
          <div style={{ color: "#b9ab60", marginLeft: '48px'}}>
            SOCIAL MEDIA
          </div>
          <BigSocialBox>
            <SocialBox src={line} />
            <SocialBox style={{ width: "40px" }} src={youtube} />
            <SocialBox src={ig} />
            <SocialBox src={facebook} />
          </BigSocialBox>
        </Box>
        <Box style={{ paddingTop: '0'}}>
          <LanBox style={{ marginBottom: "4px" }}>TH</LanBox>
          <LanBox style={{ marginBottom: "4px" }}>ENG</LanBox>
          <LanBox>CN</LanBox>
        </Box>
      </div>
    </WhiteBox>
  );
};

export default TopicNav;
