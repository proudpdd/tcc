import React, { useState } from "react";
import { ModalCustom } from "./styled";
import { CloseBut } from "modules/ModalMember/styled";
import ButtonMember from "modules/ButtonMember";
import { LinkCustom } from "modules/FooterMember/styled";

const PositionTab = () => {
  const [modalShow, setModalShow] = useState(false);
  const [nameState, setNameState] = useState("กรุณาเลือกตำแหน่ง");
  const OnClickforChange = (e) => {
    setNameState({ nameState: e.target.value });
    // console.log("wowowo")
  };

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
            <div>
              <LinkCustom to="/MemberLibrary/President">President</LinkCustom>
            </div>
            <div>
              <LinkCustom to="/MemberLibrary/Vice President">
                Vice President
              </LinkCustom>
            </div>
              <div>Secretary General</div>
              <div>Deputy Secretary General</div>
            {/* <div onClick={OnClickforChange("Assistant Secretary General")}>
              Assistant Secretary General
            </div>
            <div onClick={OnClickforChange("Senior Executive Director")}>
              Senior Executive Director
            </div>
            <div onClick={OnClickforChange("Chief Executive Director")}>
              Chief Executive Director
            </div>
            <div onClick={OnClickforChange("Deputy Chief Executive Director")}>
              Deputy Chief Executive Director
            </div> */}
          </div>
        </CloseBut>
      </ModalCustom>
    );
  };

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <ButtonMember name={nameState} />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default PositionTab;
