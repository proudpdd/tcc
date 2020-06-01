import React from "react";
import {
  Card,
  PicBox,
  BodyBox,
  Topic,
  RedLine,
  BlackLine,
  UnderLineBox,
} from "./styled";
import test from "modules/images/test.jpg";

const NewsCard = ({ nameTopic }) => {
  return (
    <Card>
      <PicBox src={test} />
      <Topic>
        <div>{nameTopic}</div>
        <UnderLineBox>
          <RedLine />
          <BlackLine />
        </UnderLineBox>
      </Topic>
      <BodyBox>
        Stores that fail to enforce disease control
      </BodyBox>
    </Card>
  );
};

export default NewsCard;
