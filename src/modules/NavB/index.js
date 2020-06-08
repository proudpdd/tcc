import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavbarCustom, NavCustom, NavLinkCustom } from "./styled";
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
          <NavbarCustom defaultActiveKey="/" expand="lg">
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <NavCustom>
                <Nav.Link href="/">หน้าแรก</Nav.Link>
                <Nav.Link href="/activity">ข่าวกิจกรรม</Nav.Link>
                <NavDropdown title="ข่าวประชาสัมพันธ์">
                  <NavDropdown.Item href="/news">
                    ข่าวสารหอการค้า
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/media">Media</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="เศรษฐกิจธุรกิจ">
                  <NavDropdown.Item href="/business">
                    บทความธุรกิจไทย - จีน
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/confident">
                    ดรรชนีความเชื่อมั่นหอการค้าไทย - จีน
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ThaiInvest">
                    การลงทุนในไทย
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ChineseInvest">
                    การลงทุนในจีน
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="สมาชิก">
                  <NavDropdown.Item href="/boardMember">
                    ทำเนียบคณะกรรมการ
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/honorMember">
                    ทำเนียบกิตติมศักดิ์
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/member">
                    ทำเนียบสมาชิก
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/action/5.4">
                    สมัครสมาชิก
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">เกี่ยวกับ</Nav.Link>
                <Nav.Link href="/contact">ติดต่อเรา</Nav.Link>
              </NavCustom>
            </Navbar.Collapse>
          </NavbarCustom>
        </MediaQuery>
      </div>
    );
  }

export default NavB;
