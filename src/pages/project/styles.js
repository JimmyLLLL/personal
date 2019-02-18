import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    margin:0 auto;
    width:1400px;
    padding-bottom:20px;
    .projectOneTitle{
        padding:60px 0;
        font-size:30px;
        margin:0 auto;
        text-align:center;
    }
    .projectTwo{
        text-align:center;
        .canvasGame{
            margin-right:60px;
        }
        .JimmyNotes{
            border:1px solid black;
            margin-left:60px;
        }
    }
    .projectOne{
        border:2px solid black;
    }
    .aEle{
        margin-left:20px;
        color:green;
        text-decoration:none;
        transition:.3s;
        &:hover{
            padding-right:20px;
            color:black;
        }
        font-size:20px
    }
    .aSpan{
        margin-left:20px;
        font-size:25px;
    }
    `