import React from "react";
import HeaderRender from "modules/HeaderRender";
import { HEADER_STATES } from "modules/HeaderRender";

const HonorMember = () => {
  return (
    <div>
      <HeaderRender
        numHeader={HEADER_STATES.HonorMember}
        name="ทำเนียบกิตติมศักดิ์"
        status="ประธานกิตติมศักดิ์ผู้ทรงเกียรติ"
      />
    </div>
  );
};

export default HonorMember;
