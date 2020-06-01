import React from "react";
import { Container } from "react-bootstrap";
import MainTopicText from "modules/MainTopicText";
import { LANGUAGE_STATE_M } from "modules/MainTopicText";
import MemberDetailCard, { PAGE_STATE } from "modules/MemberDetailCard";
import PaginationTab from "modules/PaginationTab";
import axios from "axios";

class MemberDirectory extends React.Component {
  state = {
    members: [],
  };

  componentDidMount() {
    axios
      .get(
        `http://backoffice.thaicc.org/Backoffice/ApiArea/Profile?menu=ทำเนียบคณะกรรมการ`
      )
      .then((res) => {
        const members = res.data;
        this.setState({ members });
      });
  }

  render() {
    return (
      <Container>
        <MainTopicText state={LANGUAGE_STATE_M.Thai} name="ทำเนียบสมาชิก" />
        {this.state.members.map((member) => (
          <MemberDetailCard
            PageState={PAGE_STATE.memberTab}
            surnameEng={member.name_en}
            lastnameEng={member.lastname_en}
            surnameThai={member.name_th}
            lastnameThai={member.lastname_th}
            nameChi={member.name_cn}
            companyThai={member.company_th}
            companyEng={member.company_en}
            companyChi={member.company_cn}
            BusinessThai={member.business_th}
            BusinessEng={member.business_en}
            BusinessChi={member.business_cn}
            ComPositionThai={member.position_th}
            ComPositionEng={member.position_en}
            ComPositionChi={member.position_cn}
            email={member.email}
            phone={member.phone}
            companyPhone={member.phone_company}
            locationThai={member.location_th}
            locationEng={member.location_en}
          />
        ))}
        <PaginationTab />
      </Container>
    );
  }
}

export default MemberDirectory;

