import React from "react";
import mainTopicAc from "modules/images/mainTopicAc.svg";
import mainTopicMobile from "modules/images/mainTopicMobile.svg";
import { TopicBox, PicBox, TextBox, TextBox2 } from "./styled";
import MediaQuery from "react-responsive";

export const LANGUAGE_STATE_M = {
  Thai: 0,
  Chinese: 1,
  Eng: 2,
};

const MainTopicText = ({ name, state }) => {
  const renderMainTopicText = () => {
    if (state <= 1) {
      return <TextBox>{name}</TextBox>;
    } else {
      return <TextBox2>{name}</TextBox2>;
    }
  };
  return (
    <TopicBox>
      <MediaQuery maxDeviceWidth={767}>
        {renderMainTopicText()}
        <PicBox src={mainTopicMobile} alt="mainTopicAC" />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768}>
        {renderMainTopicText()}
        <PicBox src={mainTopicAc} alt="mainTopicAC" />
      </MediaQuery>
    </TopicBox>
  );
};

export default MainTopicText;
