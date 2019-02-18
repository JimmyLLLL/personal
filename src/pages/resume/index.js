import React,{ Fragment } from 'react';
import { ResumeWrapper,BodyWrapper,Masking } from './styles';
import HeaderContent from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import { connect } from 'react-redux'
import {actionCreator} from './components/Header/store'

const Resume = (props) => {
    return(
        <Fragment>
            {props.isShow?<Masking onClick={props.handleMaskingShow} onTouchMove={props.handleMaskingShow}>滑动以完整浏览内容</Masking>:''}
            <ResumeWrapper>
                <HeaderContent></HeaderContent>
                <BodyWrapper>
                    <Left></Left>
                    <Right></Right>
                </BodyWrapper>
            </ResumeWrapper>
        </Fragment>         
    )
   
}

const mapState = (state)=>{
    return{
        isShow:state.resumeHeader.isMaskingShow
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleMaskingShow(){
            dispatch(actionCreator.showMasking());
        }
    }
}

export default connect(mapState,mapDispath)(Resume);