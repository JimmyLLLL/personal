import styled from 'styled-components'

export const EditWrapper = styled.div`
    width:850px;
    margin:0 auto;
    margin-top:60px;
    background-color:white;
    @media only screen and (min-width:320px)and (max-width:1024px){
        margin-top:45px;
        width:95%;
        height:80%;
    }
    .title{
        width:100%;
        height:40px;
        text-align:center;
        outline:none;
        font-size:20px;
        box-sizing:border-box;
        border:none;
    }
    .content{
        @media only screen and (min-width:320px)and (max-width:1024px){
            height:100%;
        }
        box-sizing:border-box;
        width:100%;
        height:700px;
        outline:none;
        font-size:20px;
        padding:5px;
        margin-top:5px;
    }
    .btn{
        box-sizing:border-box;
        padding:10px;
        width:100%;
        text-align:center;
        box-sizing:border-box;
    }
`