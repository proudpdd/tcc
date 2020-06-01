import React from "react";
import { Button } from "react-bootstrap";

const ButtonPush = ({ name }) => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-flat {
      font-family: promptLight;
      font-weight: 1000;
      color: #b9ab60;
      border: 2px solid #b9ab60;
      border-radius: 40px;
      letter-spacing: 2px;
      font-size: 16px;
      width: 130px;
      background-color: #fff; 
    }
    .btn-flat:hover {
      color: #7d6f24;
    }
    `}
      </style>
      <Button variant="flat">
        {name}
      </Button>
    </div>
  );
};

export default ButtonPush;
