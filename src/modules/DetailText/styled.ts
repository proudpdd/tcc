import styled from 'styled-components'

export const TopicBox = styled.div`
    width: 100%;
    height: 10vw;
    text-align: center;
    position: relative;
`

export const PicBox = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
`

export const TextBox = styled.div`
    font-family: 'promptLight';
    height: fit-content;
    width: 100%;
    text-align: left;
    font-size: 2.08vw;
    @media (max-width: 767px) {
        font-size: 15px;
        top: 0;
    }
    @media (max-width: 374px) {
        font-size: 13px;
        top: 0;
    }
    color: #a5974c;
    position: absolute;
    top: 3vw;
    font-weight: bold;
`

export const TextBox2 = styled(TextBox)`
    font-family: cinzel;
    letter-spacing: 5px;
`
