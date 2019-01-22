import styled from 'styled-components'
import { getClientWidth,getCountResult } from '../../function.js'

const WidthHeight = getCountResult(0.078125,getClientWidth())
const CircleFontSize = getCountResult(0.013,getClientWidth())
const WrapperWidth = getCountResult(0.53125,getClientWidth())
const TowLeft = getCountResult(0.073,getClientWidth())
const ThreeLeft = getCountResult(0.146,getClientWidth())
const FourLeft = getCountResult(0.219,getClientWidth())
const HoverWidth = getCountResult(0.088125,getClientWidth())


const CircleCommon = `
    position:relative;
    width:${WidthHeight};
    height:${WidthHeight};
    border-radius:5000px;
    display:inline-block;
    top:45%;
    text-align:center;
    line-height:${WidthHeight};
    color:white;
    font-size:${CircleFontSize};
    transition:.3s;
    cursor: pointer;
    span:after {
        content: '»';
        position: absolute;
        opacity:0;
        top: 0;
        right: 30px;
      }
    &:hover {
        background-color:green;
        width:${HoverWidth};
        span:after{
            opacity:1;
        };
        span{
            padding-right:30px;
        }
      }

`


export const BodyWrapper = styled.div`
    width:${WrapperWidth};
    margin:0 auto;
`

export const CircleWrapper = styled.div`
    position:absolute;
    height:100%;

`
export const Circleone = styled.div`
    ${CircleCommon}
    background-color:#34b3ff;
`
export const Circletwo = styled.div`
    left:${TowLeft};
    background-color:#f3cc07;
    ${CircleCommon}
`
export const Circlethree = styled.div`
    ${CircleCommon}
    left:${ThreeLeft};
    background-color:#a423d1;
`
export const Circlefour = styled.div`
    left:${FourLeft};
    background-color:#f82979;
    ${CircleCommon}
`
