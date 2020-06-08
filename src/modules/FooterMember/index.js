import React from "react";
import { Box, TextBox, TopicText } from "./styled";
import ButtonPush from "modules/ButtonPush";
import PositionTab from "modules/PositionTab";
import DepartmentTab from "modules/DepartmentTab";
import { useHistory } from "react-router-dom";

const FooterMember = () => {
  const history = useHistory();
  const OnClickExeAudit = () => {
    history.push({ pathname: "/chiefExecutiveAudit" });
  };

  return (
    <Box>
      <div style={{cursor: 'pointer'}} onClick={OnClickExeAudit}>Senior Executive Directors</div>
      <div style={{cursor: 'pointer'}}>Directors</div>
      <TextBox>
        <TopicText>ค้นหาสมาชิก</TopicText>
      </TextBox>
      <PositionTab />
      <DepartmentTab />
      <ButtonPush name="ค้นหา" />
    </Box>
  );
};

export default FooterMember;
