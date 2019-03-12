import styled from 'styled-components'

export const ProjectWrapper = styled.div`
    margin:0 auto;
    width:1024px;
    padding-bottom:20px;
    @media only screen and (min-width:320px)and (max-width:900px){
        width:100%;
    } 
    .projectOneTitle{
        padding:60px 0;
        font-size:30px;
        margin:0 auto;
        text-align:center;
        @media only screen and (min-width:320px)and (max-width:765px){
            padding:20px 0px 0px 0px;;
        }
    }
    .projectTwo{
        text-align:center;
        .JimmyNotes{
            border:1px solid black;            
        }
        @media only screen and (min-width:320px)and (max-width:900px){
            width:100%;
            iframe{
                margin-top:30px;
                width:312.5px;
                height:555.8px;
            } 
        }
        @media only screen and (min-width:600px)and (max-width:900px){
            iframe{
                margin-top:0px;
            }
            .canvasGame{
                margin-right:30px;
            }
            .JimmyNotes{
                margin-left:30px;
            }  
        } 
        @media only screen and (min-width:900px){
            .canvasGame{
                margin-right:60px;
            }
            .JimmyNotes{
                margin-left:60px;
            }            
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