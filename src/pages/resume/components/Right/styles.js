import styled from 'styled-components'

export const RightWrapper = styled.div`
    width:660px;
    float:right;
`
export const RightSmallWrapper = styled.div`
    width:630px;
    float:right;
    height:800px;
    .wrapper{
        padding-bottom:25px;
        margin-top:25px;
        .bigTitle{
            color:#4b91e2;
            font-size:15px;
        }
        .titleAtime{
            margin-top:25px;
            width:100%;
            height:16px;
            color:4e4e4e;
            font-size:16px;
            .smallTitle{
                float:left;
            }
            .time{
                float:right;
            }
        }
        .smallsmallTitle{
            margin-top:22px;
            font-size:12px;
            color:#a6a6a6;
        }
        .content{
            line-height:20px;
            margin-top:10px;
            color:#747474;
            font-size:14px;
        }

    }
`