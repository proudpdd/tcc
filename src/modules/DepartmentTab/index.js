import React from "react";
import ButtonMember from "modules/ButtonMember";
import { CloseBut } from "modules/ModalMember/styled";
import { ModalCustom2 } from "./styled";

const DepartmentTab = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const MyVerticallyCenteredModal = (props) => {
    return (
      <ModalCustom2
        closeButton
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <CloseBut closeButton>
          <div>
            <div>Department Of Finance</div>
            <div>Department Of Audit</div>
            <div>Department Of Organization Management</div>
            <div>Department Of Economic and Communication</div>
            <div>Department Of Foreign Affairs</div>
            <div>Department Of Education</div>
            <div>Department Of Culture</div>
            <div>Department Of Social Welfare</div>
            <div>Department Of Public Relations</div>
            <div>Department Of Energy Conservation</div>
            <div>Department Of Mediation</div>
            <div>Department Of Development</div>
            <div>Department Of Trade Fair & Business</div>
            <div>Department Of Information Technology</div>
            <div>Department Of Purchasing</div>
            <div>Department Of Business Information</div>
            <div>Department Of Sports</div>
            <div>Department Of Young Executive</div>
          </div>
        </CloseBut>
      </ModalCustom2>
    );
  };

  return (
    <div>
      <div onClick={() => setModalShow(true)}>
        <ButtonMember name="กรุณาเลือกฝ่าย" />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default DepartmentTab;
