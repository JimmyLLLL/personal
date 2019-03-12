import styled from 'styled-components'
import {getAvailHeightAppMasking} from '../../function.js'
export const ResumeWrapper = styled.div`
    width:1040px;
    margin:0 auto;
`

export const BodyWrapper = styled.div`
    width:950px;
    margin:0 auto;
    margin-top:35px;
`

export const Masking = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:block
    } 
    display:none;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.7);
    position:absolute;
    z-index:99;
    text-align:center;
    font-size:20px;
    color:white;
    line-height:${getAvailHeightAppMasking()}
`
