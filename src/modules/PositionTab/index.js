import React from "react";
import { ModalCustom } from "./styled";
import { CloseBut } from "modules/ModalMember/styled";
import ButtonMember from "modules/ButtonMember";

const PositionTab = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const MyVerticallyCenteredModal = (props) => {
    return (
      <ModalCustom
        closeButton
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CloseBut closeButton>
          <div>
            <div>President</div>
            <div>Vice President</div>
            <div>Secretary General</div>
            <div>Deputy Secretary General</div>
            <div>Assistant Secretary General</div>
            <div>Senior Executive Director</div>
            <div>Chief Executive Director</div>
            <div>Deputy Chief Executive Director</div>
          </div>
        </CloseBut>
      </ModalCustom>
    );
  };

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <ButtonMember name="กรุณาเลือกตำแหน่ง" />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default PositionTab;
