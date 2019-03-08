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
export const CenterWrapper = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        width:100%;
        box-sizing:border-box;
        margin-top:0px;
        border-radius:0px;
        height:100%;
    }
    width:850px;
    margin:0 auto;
    margin-top:60px;
    background-color:white;
    border-radius:10px;
    color:black;
    padding:30px;
    .wrapper{
        background-color:blue;
        line-height:20px;
        .key:not(:first-child){
            margin-top:50px;
        }
        .key{   
            font-size:20px;
        }
        .blogA{
            text-decoration:none;
        }
        .value{
            width:100%;
            height:20px;
            outline:none;
            border:none;
            font-size:15px;
            margin-top:5px;
        }
        .red{
            color:blue;
        }
        .avatarWrapper{
            @media only screen and (min-width:320px)and (max-width:1024px){
                margin:0 auto;
                border-radius:50%;
                margin-top:30px;
            }
            position:relative;
            left:0px;
            right:0px;
            height:120px;
            width:120px;
            overflow:hidden;
            .avatar{
                border-radius:20px;
                width:120px;
                height:120px;
                cursor:pointer;
            }

        }
    }
`