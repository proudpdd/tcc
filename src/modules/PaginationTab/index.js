import React from "react";
import { Pagination } from "react-bootstrap";
import { PaginationCustom, NextBox, SkipBox, NumberBox, Box } from "./styled";
import nextButton from "modules/images/nextButton.svg";
import lastButton from "modules/images/lastButton.svg";

const PaginationTab = () => {
  return (
    <Box>
      <PaginationCustom>
        <SkipBox
          style={{ transform: "rotate(180deg)" }}
          src={lastButton}
          alt="last"
        />
        <NextBox
          style={{ transform: "rotate(180deg)" }}
          src={nextButton}
          alt="next"
        />
        <NumberBox>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
        </NumberBox>
        <NextBox src={nextButton} alt="next" />
        <SkipBox src={lastButton} alt="last" />
      </PaginationCustom>
    </Box>
  );
};

export default PaginationTab;
