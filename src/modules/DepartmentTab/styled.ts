import styled from "styled-components";
import { ModalCustom } from "modules/PositionTab/styled";

export const ModalCustom2 = styled(ModalCustom)`
  .modal-content {
    height: 260px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .modal-header {
    border: none;
    padding: 0;
  }
  .modal-header .close {
    padding: 0.5rem 0.75rem 0 0;
  }
`;