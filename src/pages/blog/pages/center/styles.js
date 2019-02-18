import styled from 'styled-components'

export const CenterWrapper = styled.div`
    width:850px;
    margin:0 auto;
    margin-top:60px;
    background-color:white;
    padding:10px;
    .wrapper{
        background-color:blue;
        line-height:20px;
        .key:not(:first-child){
            margin-top:50px;
        }
        .key{   
            font-size:20px;
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
    }
`