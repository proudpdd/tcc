import React from "react";
import axios from "axios";
import HeaderRender from "modules/HeaderRender";
import { HEADER_STATES } from "modules/HeaderRender";

class HonorMember extends React.Component {
  state = {
    HonorMembers: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://backoffice.thaicc.org/Backoffice/ApiArea/Profile?menu=ทำเนียบคณะกรรมการ`
      )
      .then((res) => {
        const HonorMembers = res.data;
        this.setState({ HonorMembers });
      });
  }

  render() {
    return (
      <div>
        {this.state.HonorMembers.map((person) => (
          <HeaderRender
            numHeader={HEADER_STATES.HonorMember}
            name="ทำเนียบกิตติมศักดิ์"
            status="ประธานกิตติมศักดิ์ผู้ทรงเกียรติ"
          />
        ))}
      </div>
    );
  }
}

export default HonorMember;
