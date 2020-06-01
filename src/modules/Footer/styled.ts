import styled from 'styled-components'

export const FooterBox = styled.div`
    height: 100px;
    width: 100%;
    position: relative;
    bottom: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdd600;
    font-size: 16px;
    padding: 10px;
    font-family: 'promptLight';
    @media (max-width: 767px) {
        font-size: 11px;
	}
`