import React, { useState, useEffect } from "react";
import axios from "axios";
import CarouselMain from "modules/CarouselMain";
import { Container, Row, Col } from "react-bootstrap";
import MainTopicText from "modules/MainTopicText";
import PaginationTab from "modules/PaginationTab";
import NewsCard from "modules/NewsCard";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";

const ActivityPage = () => {
  const [activity, setactivity] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        "Content-type": "application/json",

        url: "http://backoffice.thaicc.org/ApiArea/Activitynews",
      });
      setactivity(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CarouselMain />
      <Container>
        <MainTopicText state={LANGUAGE_STATE_M.Thai} name="ข่าวกิจกรรม" />
        <Row md={4}>
          {activity.map((activityIndex, index) => (
            <Col xs={12} key={index}>
              <NewsCard
                nameTopic={activityIndex.title_th}
                discribe={activityIndex.description_th}
                pic={activityIndex.img}
                link={activityIndex.activitynews_id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <PaginationTab />
    </div>
  );
};

export default ActivityPage;
