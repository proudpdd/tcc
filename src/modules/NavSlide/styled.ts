import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavCustom = styled(Navbar)`
  background-color: #fdd600;
  .dropdown-toggle::after {
    margin-left: 10px;
    margin-top: px;
  }

  .nav-link {
    color: black !important;
  }
  .dropdown-menu {
    background-color: #fdde32;
    border: none;
  }
  .navbar-brand {
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin-right: 1rem;
  }
`;

export const PicBox = styled.img`
  width: 50px;
  height: 50px;
`
