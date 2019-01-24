import React from 'react';
import headImg from '../../../../resource/person.gif';
import { Header } from './styles'
import { connect } from 'react-redux'

const HeaderContent = (props) => (
    <Header>
        <div className="left">
            <div className="nameTop">
                <span>{props.name}</span><span className="rightSpan">{props.nameUk}</span>
            </div>
            <div className="proBottom">
                <span>{props.workAsk}</span><span className="rightPro">{props.work}</span>
            </div>
            <div className="bottomStick"></div>        
        </div>
        <div className="right">
            <div className="imgWrapper">
                <img src={headImg} alt="" className="rightImg"></img>
            </div>
        </div>            
    </Header>
)

const mapState = (state)=>{
    return{
        name:state.resumeHeader.resumeName,
        nameUk:state.resumeHeader.resumeNameUk,
        workAsk:state.resumeHeader.resumeWorkAsk,
        work:state.resumeHeader.resumeWork
    }
}

const mapDispath = (dispatch)=>{
    return{

    }
}

export default connect(mapState,mapDispath)(HeaderContent);
