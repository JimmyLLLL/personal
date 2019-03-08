import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height:50px;
    font-size:20px;
    background-color:black;
    color:white;
    line-height:50px;
    text-align:center;
    width:100%;
    z-index:4;
    position:fixed;
    top:0;
    @media only screen and (min-width:320px)and (max-width:1024px){
        height:35px;
        line-height:35px;
        font-size:15px;
    }
`