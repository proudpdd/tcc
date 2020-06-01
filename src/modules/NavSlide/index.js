import React from "react";
import logo from "modules/TopicNav/images/logo.svg";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavCustom, PicBox } from "./styled";

const NavSlide = () => {
  return (
    <NavCustom collapseOnSelect expand="lg">
      <Navbar.Brand href="/tcc">
          <PicBox src={logo} alt={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/tcc">หน้าแรก</Nav.Link>
          <Nav.Link href="/tcc/activity">ข่าวกิจกรรม</Nav.Link>
          <NavDropdown title="ข่าวประชาสัมพันธ์">
            <NavDropdown.Item href="/tcc/news">ข่าวสารหอการค้า</NavDropdown.Item>
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
            <NavDropdown.Item href="/tcc/member">ทำเนียบสมาชิก</NavDropdown.Item>
            <NavDropdown.Item href="/action/5.4">สมัครสมาชิก</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/tcc/about">เกี่ยวกับ</Nav.Link>
          <Nav.Link href="/tcc/contact">ติดต่อเรา</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NavCustom>
  );
};

export default NavSlide;
