import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import { CenterWrapper } from './styles';

class Center extends Component{
    constructor(props){
        super(props)
        this.EnterCenter = this.EnterCenter.bind(this)
    }
    EnterCenter(e){
        if(e.nativeEvent.keyCode === 13){
            this.props.PersonalInfoChange(this.props.word,this.props.nickname)
        }
    }
    render(){
        return (
            <CenterWrapper>
                <span className="wrapper">
                    <div className="key">账号: {this.props.account}</div><div className="value red">账号一次注册不可更改噢~</div>
                    <div className="key">BLOG</div><div className="value red">这是一条时光隧道，在此见证你过去的记录</div>
                    <div className="key">昵称: {this.props.AjaxNickname}</div><input className="value" placeholder="在此输入新昵称" onChange={this.props.nicknameChange} onKeyPress={this.EnterCenter} value={this.props.nickname}></input>
                    <div className="key">个性签名: {this.props.AjaxWord}</div><input className="value" placeholder="在此输入新个性签名" onChange={this.props.wordChange} onKeyPress={this.EnterCenter} value={this.props.word}></input>
                    <div className="btn" onClick={()=>this.props.PersonalInfoChange(this.props.word,this.props.nickname,this.props.AjaxNickname,this.props.AjaxWord)}>提交</div>
                </span>
            </CenterWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        word:state.blog.word,
        nickname:state.blog.nickname,
        AjaxWord:state.blog.AjaxWord,
        AjaxNickname:state.blog.AjaxNickname,
        account:state.blog.account

    }
}

const mapDispath = (dispatch)=>{
    return{
        nicknameChange(e){
            dispatch(actionCreator.nicknameChange(e.target.value))
        },
        wordChange(e){
            dispatch(actionCreator.wordChange(e.target.value))
        },
        PersonalInfoChange(word,nickname,AN,AW){
            if(word===''&&nickname!==''){
                dispatch(actionCreator.PersonalInfoChange(AW,nickname))
            }else if(word===''&&nickname===''){
                alert('不能作空白修改')
            }else if(word!==''&&nickname===''){
                dispatch(actionCreator.PersonalInfoChange(word,AN))
            }else{
                dispatch(actionCreator.PersonalInfoChange(word,nickname))
            }
            
        }
    }
}


export default connect(mapState,mapDispath)(Center);