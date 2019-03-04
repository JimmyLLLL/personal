import React,{ Component,Fragment } from 'react';
import { LoginWrapper,LoginMasking,TopLogo,AppIntro,BottomWrapper} from './styles'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actionCreator'

class Res extends Component{
    constructor(props){
        super(props)
        this.EnterRegister = this.EnterRegister.bind(this)
    }
    EnterRegister(e){
        if(e.nativeEvent.keyCode === 13){
            this.props.RegisterAJAX(this.props.account,this.props.password,this.props.allowAccount,this.props.allowPassword,this.props.existAccount)
        }
    }
    render(){
        return (
            <LoginMasking onClick={this.props.handleLoginDis}>
                <LoginWrapper onClick={(e)=>this.props.stopPropagation(e)}>
                    <TopLogo>JimmyBlog</TopLogo>
                    <AppIntro>共同分享生活点滴</AppIntro>
                    <BottomWrapper>
                        <input type="text" placeholder="请在此处键入邮箱" className="Account" onChange={this.props.AccountChange} onKeyPress={this.EnterRegister} onBlur={()=>this.props.handleAccountBlur(this.props.account)}></input>
                        {this.props.allowAccount?'':<div className="accountTips">邮箱格式不正确</div>}
                        {this.props.existAccount?<div className="accountTips">此邮箱已被注册</div>:''}
                        <input type="password" placeholder="请在此处键入不少于六位的密码" className="Password" onChange={this.props.PasswordChange} onKeyPress={this.EnterRegister} onBlur={()=>this.props.handlePasswordBlur(this.props.password)}></input>
                        {this.props.allowPassword?'':<div className="passwordTips">密码不得少于六位</div>}
                        <div className="LoginBtn" onClick={()=>this.props.RegisterAJAX(this.props.account,this.props.password,this.props.allowAccount,this.props.allowPassword,this.props.existAccount)}>注册</div>
                    </BottomWrapper>
                </LoginWrapper>
            </LoginMasking>        
        )
    }
}

const mapState = (state)=>{
    return{
        account:state.blog.account,
        password:state.blog.password,
        allowAccount:state.blog.allowAccount,
        allowPassword:state.blog.allowPassword,
        existAccount:state.blog.existAccount
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleAccountBlur(account){
            const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(ePattern.test(account)){
                dispatch(actionCreator.allowAccount(true))
                dispatch(actionCreator.checkExistAccount(account))
            }else{
                dispatch(actionCreator.allowAccount(false))
            }
        },
        handlePasswordBlur(password){
            if(password.length>=6){
                dispatch(actionCreator.allowPassword(true))
            }else{
                dispatch(actionCreator.allowPassword(false))
            }
        },
        AccountChange(e){
            dispatch(actionCreator.AccountChange(e.target.value))
        },
        PasswordChange(e){
            dispatch(actionCreator.PasswordChange(e.target.value))
        },
        handleLoginDis(){
            dispatch(actionCreator.handleResDis()); 
        },
        stopPropagation(e){
            e.stopPropagation();
        },
        RegisterAJAX(account,password,allowAccount,allowPassword,existAccount){
            if(allowAccount&&allowPassword&&!existAccount){
                if(account!==''&&password!==''){
                    dispatch(actionCreator.RegisterAJAX(account,password));    
                }else{
                    alert('请键入邮箱及密码进行注册')
                }
                    
            }
            
        }

    }
}


export default connect(mapState,mapDispath)(Res);