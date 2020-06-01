import styled from 'styled-components'

export const TopicBox = styled.div`
    width: 100%;
    height: 5vw;
    text-align: center;
    position: relative;
    margin-bottom: 10px;
`
export const TextBox = styled.div`
    font-family: 'promptLight';
    height: fit-content;
    width: 100%;
    height: 4vw;
    text-align: left;
    font-size: 2.93vw;
    @media (max-width: 767px) {
        font-size: 13px;
        height: 5.7vw;
	}
    font-weight: bold;
    color: #0a2980;
    border-bottom: 0.1389vw solid #b9ab60;
`