import styled from "styled-components";
import { Pagination } from "react-bootstrap";

export const PaginationCustom = styled(Pagination)`
    .page-link {
        color: #B9AB60;
        border: none;
        font-weight: 1000;
        font-size: 18px;
        padding: 8px 6px; 
        @media (max-width: 767px) {
            font-size: 14px;
        }
    }
    height: 38px;
    width: 270px;
    @media (max-width: 767px) {
        width: 217px;
    }
`;

export const NextBox = styled.img`
    height: 36px;
    width: 32.91px;
    padding: 0 10px 0;
    @media (max-width: 767px) {
        height: 30px;
        width: 26.91px;
        padding: 0 8px 0;
    }
`
export const SkipBox = styled.img`
    height: 36px;
    width: 32.91px;
    padding: 0 5px;
    @media (max-width: 767px) {
        height: 30px;
        width: 26.91px;
        padding: 0 4px;
    }
`

export const NumberBox = styled.div`
    padding: 0 15px 0 15px;
    display: flex;
    @media (max-width: 767px) {
        padding: 0 8px 0 8px;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 50px 0;
`