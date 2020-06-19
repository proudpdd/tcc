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
import MemberLibrary from "./MemberLibrary";
import NavB from "modules/NavB";
import Footer from "modules/Footer";
import ScrollTop from "./ScrollTop";
import DetailNewsPage from "./DetailNewsPage";

const Routes = () => {
  return (
    <Router>
      <ScrollTop>
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
        <Route path="/MemberLibrary/:name" component={MemberLibrary} />
        <Route path="/DetailNews/:news" component={DetailNewsPage} />
        <Footer />
      </ScrollTop>
    </Router>
  );
};

export default Routes;
