import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import { CenterWrapper } from './styles';

class Center extends Component{
    constructor(props){
        super(props)
        this.EnterCenter = this.EnterCenter.bind(this)
        this.showChangeAvatar = this.showChangeAvatar.bind(this)
    }
    EnterCenter(e){
        if(e.nativeEvent.keyCode === 13){
            this.props.PersonalInfoChange(this.props.word,this.props.nickname,this.props.AjaxNickname,this.props.AjaxWord)
        }
    }
    showChangeAvatar(){
        this.refs.file.click()
    }

    render(){
        return (
            <CenterWrapper>
                <span className="wrapper">
                    <div className="avatarWrapper">
                        <img className="avatar" src={this.props.avator} alt="点击上传头像" onClick={this.showChangeAvatar}></img>
                    </div>
                    <iframe name="fileUpload" className="noIframe" ref="noIframe"></iframe>
                    <form action="http://www.jinmylam.xin:8003/personalAPI/blog/uploadAvator" encType="multipart/form-data" method="post" target="fileUpload">
                        <input className="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" ref="file"/>
                        <input className="realSubmit" type="submit" value="提交" ref="submit"></input>
                        <input className="username" type="password" ref="username" name="account" defaultValue={this.props.avatorUser||''}></input>
                        <div className="submit" onClick={this.props.avatorSubmitValid.bind(this)}>请先点击上面头像以更换新的图片，再点击此处以进行提交</div>
                    </form>                                   
                    <div className="key">账号: {this.props.account}</div><div className="value red">账号一次注册不可更改噢~</div>
                    <div className="key">BLOG</div><a href="http://www.jinmylam.xin/#/blog/personalBlog" target="_blank" className="blogA"><div className="value red">这是一条时光隧道，在此见证你过去的记录</div></a>
                    <div className="key">昵称: {this.props.AjaxNickname}</div><input className="value" placeholder="在此输入新昵称" onChange={this.props.nicknameChange} onKeyPress={this.EnterCenter} value={this.props.nickname}></input>
                    <div className="key">个性签名: {this.props.AjaxWord}</div><input className="value" placeholder="在此输入新个性签名" onChange={this.props.wordChange} onKeyPress={this.EnterCenter} value={this.props.word}></input>
                    <div className="btn" onClick={()=>this.props.PersonalInfoChange(this.props.word,this.props.nickname,this.props.AjaxNickname,this.props.AjaxWord)}>提交信息</div>
                </span>
            </CenterWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        avator:state.blog.avator,
        word:state.blog.word,
        nickname:state.blog.nickname,
        AjaxWord:state.blog.AjaxWord,
        AjaxNickname:state.blog.AjaxNickname,
        account:state.blog.account,
        avatorUser:state.blog.avatorUser

    }
}

const mapDispath = (dispatch)=>{
    return{
        avatorSubmitValid(){
            const submitDom = this.refs.submit
            const noIframe = this.refs.noIframe
            dispatch(actionCreator.avatorSubmitValid(submitDom,noIframe))
        },
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