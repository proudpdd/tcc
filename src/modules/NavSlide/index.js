import React from "react";
import logo from "modules/TopicNav/images/logo.svg";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavCustom, PicBox } from "./styled";

const NavSlide = () => {
  return (
    <NavCustom defaultactivekey="/" collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
          <PicBox src={logo} alt={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">หน้าแรก</Nav.Link>
          <Nav.Link href="/activity">ข่าวกิจกรรม</Nav.Link>
          <NavDropdown title="ข่าวประชาสัมพันธ์">
            <NavDropdown.Item href="/news">ข่าวสารหอการค้า</NavDropdown.Item>
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
            <NavDropdown.Item href="/member">ทำเนียบสมาชิก</NavDropdown.Item>
            <NavDropdown.Item href="/action/5.4">สมัครสมาชิก</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">เกี่ยวกับ</Nav.Link>
          <Nav.Link href="/contact">ติดต่อเรา</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NavCustom>
  );
};

export default NavSlide;
