import React from "react";
import { Button } from "react-bootstrap";

const HomeButton = ({ name }) => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-flatx {
      font-family: promptLight;
      font-weight: 1000;
      color: #fff;
      background-color: #0a2980; 
      border-radius: 10px;
      letter-spacing: 2px;
      font-size: 16px;
      width: 70%;
      height: 50px;
      margin: 5px 0 5px 0;
    }
    .btn-flatx:hover {
      color: #fff;
    }
    `}
      </style>
      <Button variant="flatx">
        {name}
      </Button>
    </div>
  );
};

export default HomeButton;
