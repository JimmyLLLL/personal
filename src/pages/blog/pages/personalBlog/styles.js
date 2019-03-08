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
export const BlogWrapper = styled.div`
    width:850px;
    margin:0 auto;
    margin-top:60px;
    @media only screen and (min-width:320px)and (max-width:1024px){
        overflow:hidden;
        width:100%;
        margin-top:35px;
    }
`

export const LeftWrapper = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        width:100%;
    }
    width:590px;
    float:left;
    background-color:white;
    .loading{
        background-color:#f6f6f6
        text-align:center;
        height:30px;
        line-height:30px;
    }
`

export const RightWrapper = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        display:none
    }
    position:fixed;
    width:250px;
    margin-left:600px;
    background-color:white;
    .rightUl{
        margin-top:50px;
        font-size:15px;
        padding-bottom:50px;
        .selectLi{
            background-color:#f6f6f6;
        }
        li{
            color:#8b95aa;
            &:hover{
                background-color:#f6f6f6;
            }
            height:35px;
            line-height:35px;
            text-align:center;
        }
    }
`

export const LeftHeader = styled.div`
    width:100%;
    height:50px;
    border-bottom:1px solid #f6f6f6;
    font-size:16px;
    font-weight:bold;
    line-height:50px;
    padding-left:16px;
`

export const LeftContent = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        padding:10px;
    }
    box-sizing:border-box;
    width:100%;
    padding:16px;
    border-bottom:1px solid #f6f6f6;
    background-color:#ffffff;
    a{
        text-decoration: none;
        color:black;
    }
`

export const LeftContentHeader = styled.div`
    font-size:16px;
    color:black;
`

export const LeftContentCon = styled.div`
    @media only screen and (min-width:320px)and (max-width:1024px){
        line-height:16px;
    }
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size:14px;
    margin-top:16px;
    line-height:15px;
`
export const LeftContentBottom = styled.div`
    .deleteBlog{
        font-size:11px;
        margin-right:10px;
        color:red;
        float:right;
        cursor:pointer;
    }
    margin-top:20px;
    font-size:10px;
    i {
        font-size:13px;
    }
    .secondI{
        margin-left:20px;
    }
    .bottomSpan{
        margin-left:5px;
        font-size:13px;
    }
`