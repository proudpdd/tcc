import React from "react";
import HeaderRender from 'modules/HeaderRender'
import {HEADER_STATES} from 'modules/HeaderRender'

const HonorMember = () => {
  return (
    <HeaderRender
      numHeader={HEADER_STATES.HonorMember}
      name="ทำเนียบกิตติมศักดิ์"
      status='ประธานกิตติมศักดิ์ผู้ทรงเกียรติ'
    />
  );
};

export default HonorMember;
