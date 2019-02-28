import styled from 'styled-components'


export const LoginMasking = styled.div`
    position:fixed;
    background-color:rgba(0,0,0,0.7);
    width:100%;
    height:100%;
    top:0px;
`

export const LoginWrapper = styled.div`
    width:430px;
    height:490px;
    background-color:white;
    margin:0 auto;
    margin-top:9%;
    z-index:99;
`
export const TopLogo = styled.div`
    font-size:30px;
    color:#2a84ff;
    width:100%;
    height:50px;
    text-align:center;
    line-height:50px;
    padding-top:25px;
`

export const AppIntro = styled.div`
    font-size:10px;
    color:#2a84ff;
    width:100%;
    text-align:center;
    line-height:15px;
`

export const BottomWrapper = styled.div`
    width:350px;
    background-color:blue;
    margin:0 auto;
    .Account{
        position:absolute;
        font-size:20px;
        width:344px;
        height:40px;
        margin-top:40px;
        padding:5px;
        border:none;
        outline:none;
        border-bottom:1px solid #ebebeb;
    }
    .Password{
        border:none;
        outline:none;
        padding:5px;
        height:40px;
        margin-top:120px;
        position:absolute;
        font-size:20px;
        width:344px;
        border-bottom:1px solid #ebebeb;
    }
    .LoginBtn{
        text-align:center;
        font-size:20px;
        background-color:#2a84ff;
        width:358px;
        line-height:40px;
        color:white;
        border-radius:5px;
        position:absolute;
        margin-top:220px;
        height:40px;
    }
`
