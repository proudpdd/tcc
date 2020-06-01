import React from "react";
import mainTopicBlue from "modules/images/mainTopicBlue.svg";
import mainTopicMobileBlue from "modules/images/mainTopicMobileBlue.svg";
import { TopicBox, PicBox, TextBox, Cover } from "./styled";
import MediaQuery from "react-responsive";

const MainTopicTextBlue = ({ name }) => {
  return (
    <TopicBox>
      <MediaQuery maxDeviceWidth={767}>
        <Cover>
          <TextBox>{name}</TextBox>
          <PicBox src={mainTopicMobileBlue} alt="mainTopicAC" />
        </Cover>
      </MediaQuery>
      <MediaQuery minDeviceWidth={768}>
        <Cover>
          <TextBox>{name}</TextBox>
          <PicBox src={mainTopicBlue} alt="mainTopicAC" />
        </Cover>
      </MediaQuery>
    </TopicBox>
  );
};

export default MainTopicTextBlue;
