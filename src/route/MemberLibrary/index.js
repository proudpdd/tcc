import React from "react";
import HeaderRender from "modules/HeaderRender";
import { useParams } from "react-router-dom";

const MemberLibrary = () => {
  const { name } = useParams();
  return <HeaderRender name={name} />;
};

export default MemberLibrary;
