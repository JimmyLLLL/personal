import styled from 'styled-components'

export const ArticleWrapper = styled.div`
    width:850px;
    margin:0 auto;
    margin-top:60px;
    position:relative;
    height:100%;
    .title{
        font-size:30px;
        line-height:50px;
        text-align:center;
    }
    .content{
        font-size:17px;
        line-height:25px;
    }
    .author{
        text-align:center;
        line-height:35px;
        span{
            margin-left:25px;
        }
    }
`