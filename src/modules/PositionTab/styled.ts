import styled from "styled-components";
import { Modal } from "react-bootstrap";

export const ModalCustom = styled(Modal)`
  padding-left: 0px;
  padding: 0;
  font-family: promptLight;
  font-size: 18px;
  .modal-content {
    height: fit-content;
    width: fit-content;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #b9ab60;
    padding: 20px;
    color: #0a2980;
    cursor: pointer;
  }
  .modal-dialog-centered {
    justify-content: center;
  }
  .modal-header {
    border: none;
    padding: 0;
  }
  .modal-header .close {
    padding: 0.5rem 0.75rem 0 0;
  }
`;
