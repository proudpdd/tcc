import React from "react";
import { Box, TextBox, TopicText, LinkCustom } from "./styled";
import ButtonPush from "modules/ButtonPush";
import PositionTab from "modules/PositionTab";
import DepartmentTab from "modules/DepartmentTab";

const FooterMember = ({ name }) => {
  return (
    <Box>
      <div>
        <LinkCustom to={`/MemberLibrary/Senior Executive Directors`}>
          Senior Executive Directors
        </LinkCustom>
      </div>
      <div>
        <LinkCustom to={`/MemberLibrary/Directors`}>Directors</LinkCustom>
      </div>
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
