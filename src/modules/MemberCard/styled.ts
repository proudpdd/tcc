import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 50px;
    cursor: pointer;
`

export const Detail = styled.div`
    height: fit-content;
    word-break: break-all;
    color: black;
    font-family: cinzel;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PicBox = styled.img`
    height: auto;
    overflow: hidden; 
    width: 100%;
    margin-bottom: 10px;
`

export const StatusText = styled.div`
    font-size: 20px;
    text-align: center;
    color: #0a2980;
    font-weight: bold;
    font-family: promptLight;
`