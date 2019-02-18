import styled from 'styled-components'


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
    position:fixed;
    height:50px;
    list-style: none;
    top:0px;
    right:0px;
    z-index:3;
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
    z-index:3;
    width:300px;
    display:flex;
    .welcome {
        line-height:50px;
        height:50px;
        font-size:15px;
        color:white;
        margin-left:20px;
    }
    .logout {
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
`