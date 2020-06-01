import React from "react";
import {
  Card,
  PicBox,
  BodyBox,
  Topic,
  LongLine,
  ShortLine,
  UnderLineBox,
} from "./styled";
import test from "modules/images/test.jpg";

const NewsCardHomePage = ({ nameTopic }) => {
  return (
    <Card>
      <PicBox src={test} />
      <Topic>
        <div>{nameTopic}</div>
        <UnderLineBox>
          <LongLine />
          <ShortLine />
        </UnderLineBox>
      </Topic>
      <BodyBox>
        Stores that fail to enforce disease control
      </BodyBox>
    </Card>
  );
};

export default NewsCardHomePage;
