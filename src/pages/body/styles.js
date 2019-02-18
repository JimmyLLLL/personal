import styled from 'styled-components'
import bg from '../../resource/bg.jpg'

const CircleCommon = `
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:block;
        left:0;
        margin:20px auto;
        width:80px;
        height:80px;
        line-height:80px;
        font-size:14px;
    } 
    position:relative;
    width:150px;
    height:150px;
    border-radius:5000px;
    display:inline-block;
    text-align:center;
    line-height:150px;
    color:white;
    font-size:25px;
    transition:.3s;
    cursor: pointer;
    span:after {
        transition: 0.3s;
        content: '»';
        position: absolute;
        opacity:0;
        top: 0;
        right: 50px;
      }
    &:hover {
        background-color:green;
        width:180px;
        span:after{
            opacity:1;
        };
        span{
            transition: 0.3s;
            padding-right:30px;
        }
      }

`


export const BodyWrapper = styled.div`
    width:1020px;
    margin:0 auto;
    overflow:hidden;
    @media only screen and (min-width:320px)and (max-width:1024px){
        width:100%;
    } 
`

export const CircleWrapper = styled.div`
    position:absolute;
    top:45%;
    @media only screen and (min-width:320px)and (max-width:1024px){
        top:13%;
        a{
            text-decoration:none;
        }
        width:100%;
    } 
`
export const Circleone = styled.div`
    ${CircleCommon}
    background-color:#34b3ff;
`
export const Circletwo = styled.div`
    left:140px;
    background-color:#f3cc07;
    ${CircleCommon}
`
export const Circlethree = styled.div`
    ${CircleCommon}
    left:280px;
    background-color:#a423d1;
`
export const Circlefour = styled.div`
    left:420px;
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