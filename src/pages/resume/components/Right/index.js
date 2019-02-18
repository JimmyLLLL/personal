import React from 'react';
import { connect } from 'react-redux';
import { RightWrapper,RightSmallWrapper } from './styles'

const  right = (props) => (
   <RightWrapper>
       <RightSmallWrapper>
           {props.list.map((item,index)=>{
               return(
                   <div className="wrapper" key={index}>
                        <div className="bigTitle">{item.theme}</div>
                        <div className="titleAtime"><div className="smallTitle">{item.contentOne}</div><div className="time">{item.time}</div></div>
                        {item.contentTwo.map((item,index)=>{
                            return(
                            <div className="smallsmallTitle" key={index}>{item}</div>                                
                            )
                        })}
                        {item.contentThree.map((item,index)=>{
                            return(
                            <div className="content" key={index}>{item}</div>                                 
                            )
                        })}
   
                   </div>                                
               )

           })}
       </RightSmallWrapper>
   </RightWrapper>
)

const mapState = (state)=>{
    return{
        list:state.resumeRight.rightInfo
    }
}

const mapDispath = (dispatch)=>{
    return{
        
    }
}

export default connect(mapState,mapDispath)(right);
