import styled from 'styled-components'
import bg from '../../resource/bg.jpg'

import { getClientWidth,getCountResult } from '../../function.js'
const WidthHeight = getCountResult(0.078125,getClientWidth())
const CircleFontSize = getCountResult(0.013,getClientWidth())
const WrapperWidth = getCountResult(0.53125,getClientWidth())
const TowLeft = getCountResult(0.073,getClientWidth())
const ThreeLeft = getCountResult(0.146,getClientWidth())
const FourLeft = getCountResult(0.219,getClientWidth())


const CircleCommon = `
    position:relative;
    width:${WidthHeight};
    height:${WidthHeight};
    border-radius:5000px;
    display:inline-block;
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
        right: .3rem;
      }
    &:hover {
        background-color:green;
        width:1.8rem;
        span:after{
            opacity:1;
        };
        span{
            padding-right:.3rem;
        }
      }

`


export const BodyWrapper = styled.div`
    width:${WrapperWidth};
    margin:0 auto;
    overflow:hidden;
`

export const CircleWrapper = styled.div`
    position:absolute;
    top:45%;
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
    left:${ThreeLeft}
    background-color:#a423d1;
`
export const Circlefour = styled.div`
    left:${FourLeft};
    background-color:#f82979;
    ${CircleCommon}
`

export const Bgpic = styled.div`
	background:url(${bg});
	width:100%;
	min-width:15.64rem;
	background-size:100% 100%;
	background-repeat:no-repeat;
	height:100%;
	z-index:-1;
	position:absolute;
`

export const BgpicWrapper = styled.div`
	width:100%;
	height:100%;
	position:absolute;
    overflow:hidden;
    top:0;
`