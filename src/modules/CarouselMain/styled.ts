import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'

export const CarouselCustom = styled(Carousel)`
    .carousel-inner {
        width: 100%;
        height: 30vw;
        overflow: hidden;
    }
    .carousel-indicators {
        display: none;
    }
    .carousel-control-prev {
        background-color: black;
        width: 17vw;
    }
    .carousel-control-next {
        background-color: black;
        width: 17vw;

    }
`
export const Line = styled.div`
    height: 10px;
    width: 100%;
    background-color: #fdd600;
`