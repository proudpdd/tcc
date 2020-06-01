import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavbarCustom, NavCustom } from "./styled";
import TopicNav from "../TopicNav";
import MediaQuery from "react-responsive";
import NavSlide from "modules/NavSlide";

const NavB = () => {
  return (
    <div style={{ fontFamily: "promptLight" }}>
      <MediaQuery maxDeviceWidth={991}>
        <NavSlide />
      </MediaQuery>

      <MediaQuery minDeviceWidth={992}>
        <TopicNav />
        <NavbarCustom defaultActiveKey="/home " expand="lg">
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <NavCustom>
              <Nav.Link href="/tcc">หน้าแรก</Nav.Link>
              <Nav.Link href="/tcc/activity">ข่าวกิจกรรม</Nav.Link>
              <NavDropdown title="ข่าวประชาสัมพันธ์">
                <NavDropdown.Item href="/tcc/news">
                  ข่าวสารหอการค้า
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/media">Media</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="เศรษฐกิจธุรกิจ">
                <NavDropdown.Item href="/tcc/business">
                  บทความธุรกิจไทย - จีน
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/confident">
                  ดรรชนีความเชื่อมั่นหอการค้าไทย - จีน
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/ThaiInvest">
                  การลงทุนในไทย
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/ChineseInvest">
                  การลงทุนในจีน
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="สมาชิก">
                <NavDropdown.Item href="/tcc/boardMember">
                  ทำเนียบคณะกรรมการ
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/honorMember">
                  ทำเนียบกิตติมศักดิ์
                </NavDropdown.Item>
                <NavDropdown.Item href="/tcc/member">
                  ทำเนียบสมาชิก
                </NavDropdown.Item>
                <NavDropdown.Item href="/action/5.4">
                  สมัครสมาชิก
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/tcc/about">เกี่ยวกับ</Nav.Link>
              <Nav.Link href="/tcc/contact">ติดต่อเรา</Nav.Link>
            </NavCustom>
          </Navbar.Collapse>
        </NavbarCustom>
      </MediaQuery>
    </div>
  );
};

export default NavB;
