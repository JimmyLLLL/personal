import React from 'react';
import { LeftWrapper } from './styles';
import { connect } from 'react-redux'

const Left = (props) => (
        <LeftWrapper>
                <div className="Info">INFO</div>
                <ul className="InfoContentWrapper">
                        {props.INFO.map((item,index)=>{
                                return (
                                        <li className="InfoContent" key={item.key}>
                                                <div className="InfoTitle">{item.key}</div><div className="InfoDetail">{item.content}</div>
                                        </li>
                                )
                        })}
                </ul>
                <div className="Info">EDUCATION</div>
                <ul className="EducationContentWrapper">
                        {props.EDUCATION.map((item,index)=>{
                                return (
                                        <li className="EducationContent" key={item.time}>
                                                <div className="EducationSchool">{item.school}</div>
                                                <div className="EducationTime">{item.time}</div>
                                                {item.addition.map((item,index)=>{
                                                        return(
                                                                <div className="EducationAddition" key={item}>{item}</div>
                                                        )
                                                })}

                                        </li>
                                )
                        })}
                </ul>
                <div className="Info">HOBBIES</div>
                <ul className="EducationContentWrapper">
                        {props.HOBBIES.map((item,index)=>{
                                return(
                                        <li key={item}><div className="HobbiesItem">{item}</div></li>
                                )
                        })}
                </ul>                
        </LeftWrapper>
)

const mapState = (state)=>{
        return{
                INFO:state.resumeLeft.INFO,
                EDUCATION:state.resumeLeft.EDUCATION,
                HOBBIES:state.resumeLeft.HOBBIES
        }
    }
    
    const mapDispath = (dispatch)=>{
        return{
    
        }
    }
    
    export default connect(mapState,mapDispath)(Left);
    