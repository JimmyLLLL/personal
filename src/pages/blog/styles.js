import styled from 'styled-components'

export const Mask = styled.div`
    height:100%;
    width:100%;
    z-index:3;
    position:absolute;
    background-color:rgb(0,0,0,0.7);
`

export const MobileNav = styled.div`
    z-index:4;
    position:fixed;
    background:black;
    margin-top:35px;
    width:100%;
    color:white;
    z-index:999;
    ul{
        font-size:13px;
        padding:0 15px;
        li{
            line-height:40px;
            height:40px;
            border-bottom:1px solid white;
        }
        li:last-child{
            border:none;
        }
        li:first-child{
            border:none;
        }
    }
`

export const ColumnIcon = styled.div`
    color:white;
    position:fixed;
    top:-3px;
    height:50px;
    line-height:50px;
    left:15px;
    cursor:pointer;
    z-index:99;
    @media only screen and (min-width:1024px){
        display:none;
    }
`

export const Bg = styled.div`
    width:100%;
    position:absolute;
    min-height:100%;
    background-color:#f6f6f6;
    top:0px;
    z-index:-1;
    height:100%;
    overflow:scroll;
`

export const LoginLogout = styled.ul`
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:none;
    }
    position:fixed;
    height:50px;
    list-style: none;
    top:0px;
    right:0px;
    z-index:4;
    margin-right:150px;
    li{
        text-align:center;
        line-height:50px;
        font-size:15px;
        display: block;
        float: left;
        width:100px;
        color:white;
        &:hover{
          background-color:green;  
        }
        
    }
`

export const AllReadyLogin = styled.div`
    right:0px;
    position:fixed;
    height:50px;
    top:0px;
    z-index:4;
    width:300px;
    display:flex;
    .welcome {
        @media only screen and (min-width:320px)and (max-width:1024px){
            display:none;
        }
        line-height:50px;
        height:50px;
        font-size:15px;
        color:white;
        margin-left:20px;
    }
    .logout {
        @media only screen and (min-width:320px)and (max-width:1024px){
            display:none;
        }
        color:red;
        margin-left:25px;
        height:50px;
        line-height:50px;
        font-size:15px;
        cursor:pointer;
    }
`

export const PersonalCenter = styled.div`
    position:fixed;
    color:white;
    top:0px;
    font-size:15px;
    height:50px;
    line-height:50px;
    left:70px;
    cursor:pointer;
    z-index:99;
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:none;
    }
`

export const ShowEdit = styled.div`
    z-index:99;
    position:fixed;
    color:white;
    top:0px;
    font-size:15px;
    height:50px;
    line-height:50px;
    left:170px;
    cursor:pointer;
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:none;
    }
`