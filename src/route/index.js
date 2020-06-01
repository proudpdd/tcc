import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import ActivityPage from "./ActivityPage";
import InformationPage from "./InformationPage";
import MediaPage from "./MediaPage";
import ThaiChineseBusiness from "./ThaiChineseBusiness";
import ThaiChineseConfident from "./ThaiChineseConfident";
import ThaiInvest from "./ThaiInvest";
import ChineseInvest from "./ChineseInvest";
import BoardMember from "./BoardMember";
import HonorMember from "./HonorMember";
import MemberDirectory from "./MemberDirectory";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import SecretaryGeneral from "./SecretaryGeneral";
import ChiefFinance from "./ChiefFinance";
import ExeFinance from "./ExeFinance";
import ExeAudit from "./ExeAudit";
import NavB from "modules/NavB";
import Footer from "modules/Footer";

const Routes = () => {
  return (
    <Router>
      <NavB />
      <Route exact path="/" component={HomePage} />
      <Route path="/activity" component={ActivityPage} />
      <Route path="/news" component={InformationPage} />
      <Route path="/media" component={MediaPage} />
      <Route path="/business" component={ThaiChineseBusiness} />
      <Route path="/confident" component={ThaiChineseConfident} />
      <Route path="/ThaiInvest" component={ThaiInvest} />
      <Route path="/ChineseInvest" component={ChineseInvest} />
      <Route path="/boardMember" component={BoardMember} />
      <Route path="/honorMember" component={HonorMember} />
      <Route path="/member" component={MemberDirectory} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/secretaryGeneral" component={SecretaryGeneral} />
      <Route path="/chiefExecutive" component={ExeFinance} />
      <Route path="/chiefExecutiveDeputy" component={ChiefFinance} />
      <Route path="/chiefExecutiveAudit" component={ExeAudit} />
      <Footer />
    </Router>
  );
};

export default Routes;
