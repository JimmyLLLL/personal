import styled from 'styled-components'

export const CenterWrapper = styled.div`
    width:850px;
    margin:0 auto;
    margin-top:60px;
    background-color:white;
    padding:10px;
    @media only screen and (min-width:320px)and (max-width:1024px){
        width:100%;
        box-sizing:border-box;
        margin-top:35px;
    }
    .wrapper{
        .noIframe{
            width:0px;
            height:0px;
        }
        form{
            .file{
                display:none;
            }
            .submit{
                @media only screen and (min-width:320px)and (max-width:1024px){
                    width:100%;
                    box-sizing:border-box;
                }
                text-align:center;
                font-size:15px;
                border-radius:5px;
                color:white;
                padding:5px;
                margin-top:30px;
                background:green;
                width:420px;
            }
            .realSubmit{
                display:none;
            }
            .username{
                display:none
            }
        }
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
        .btn{
            margin-top:50px;
            width:100%;
            height:30px;
            line-height:30px;
            color:white;
            border-radius:5px;
            text-align:center;
            background-color:green;
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