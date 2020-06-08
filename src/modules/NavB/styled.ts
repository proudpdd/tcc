import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export const NavbarCustom = styled(Navbar)`
  background-color: #fdd600;
  .dropdown-toggle::after {
    display: none;
  }
  .nav-link {
    color: black !important;
  }
  .dropdown-menu {
    background-color: rgba(253, 214, 0, 0.8);
    border: none;
  }
`;

export const NavCustom = styled(Nav)`
  .mr-auto {
    margin-right: 0;
  }
  .nav-item {
    color: red !important;
  }
`;

export const NavLinkCustom = styled(Nav)`
  .nav-item {
    &:active {
      color: red !important;
    }
  }
`;
