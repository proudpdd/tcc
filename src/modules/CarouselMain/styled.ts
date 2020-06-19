import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'

export const CarouselCustom = styled(Carousel)`
    .carousel-inner {
        width: 100%;
        height: auto;
        overflow: hidden;
    }
    .carousel-indicators {
        display: none;
    }
    .carousel-control-prev {
        background-color: black;
        width: 13vw;
    }
    .carousel-control-next {
        background-color: black;
        width: 13vw;

    }
`
export const Line = styled.div`
    height: 10px;
    width: 100%;
    background-color: #fdd600;
`

export const PicBox = styled.img`
    width: 100%;
    height: 35vw;
    @media (max-width: 500px) {
        height: 50vw;
    }
`