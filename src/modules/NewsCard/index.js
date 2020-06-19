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
import { useHistory, Link } from "react-router-dom";
import ReactDOM from "react-dom";

// const discribeTry = (discribe) => {
//   return { __html: { discribe } };
// };

const NewsCard = ({ nameTopic, discribe, pic, link }) => {
  const history = useHistory();
  const OnClickDetailNews = () => {
    history.push({ pathname: "/DetailNews" });
  };

  return (
    <Link to={`/DetailNews/${link}`}>
      <Card onClick={OnClickDetailNews}>
        <PicBox src={pic} />
        <Topic>
          <div>{nameTopic}</div>
          <UnderLineBox>
            <RedLine />
            <BlackLine />
          </UnderLineBox>
        </Topic>
        {/* {discribeTry} */}
        <BodyBox>discribe</BodyBox>
      </Card>
    </Link>
  );
};

export default NewsCard;
