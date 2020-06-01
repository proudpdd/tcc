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
      <Route exact path="/tcc" component={HomePage} />
      <Route path="/tcc/activity" component={ActivityPage} />
      <Route path="/tcc/news" component={InformationPage} />
      <Route path="/tcc/media" component={MediaPage} />
      <Route path="/tcc/business" component={ThaiChineseBusiness} />
      <Route path="/tcc/confident" component={ThaiChineseConfident} />
      <Route path="/tcc/ThaiInvest" component={ThaiInvest} />
      <Route path="/tcc/ChineseInvest" component={ChineseInvest} />
      <Route path="/tcc/boardMember" component={BoardMember} />
      <Route path="/tcc/honorMember" component={HonorMember} />
      <Route path="/tcc/member" component={MemberDirectory} />
      <Route path="/tcc/about" component={AboutPage} />
      <Route path="/tcc/contact" component={ContactPage} />
      <Route path="/tcc/secretaryGeneral" component={SecretaryGeneral} />
      <Route path="/tcc/chiefExecutive" component={ExeFinance} />
      <Route path="/tcc/chiefExecutiveDeputy" component={ChiefFinance} />
      <Route path="/tcc/chiefExecutiveAudit" component={ExeAudit} />
      <Footer />
    </Router>
  );
};

export default Routes;
