import React from "react";
import { Button } from "react-bootstrap";

const ButtonMember = ({name}) => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-tab {
      font-family: promptLight;
      color: #0a2980;
      border: 2px solid #b9ab60;
      border-radius: 20px;
      letter-spacing: 2px;
      width: 300px;
      height: 50px;
      background-color: #fff; 
      margin-bottom: 20px;
    }
    .btn-flat:hover {
      color: #7d6f24;
    }
    `}
      </style>
      <Button variant="tab">{name}</Button>
    </div>
  );
};

export default ButtonMember