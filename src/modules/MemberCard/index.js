import React from "react";
import { Card, Detail, PicBox, StatusText } from "./styled";

const MemberCard = ({ surname, lastname, status, pic }) => {
  return (
    <Card>
      <PicBox src={pic} alt="member" />
      <Detail>
        <div>
          <div style={{ textAlign: "center" }}>{surname}</div>
          <div style={{ textAlign: "center" }}>{lastname}</div>
          <StatusText>{status}</StatusText>
        </div>
      </Detail>
    </Card>
  );
};

export default MemberCard;
