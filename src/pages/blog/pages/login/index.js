import React,{ Component,Fragment } from 'react';
import { LoginWrapper,LoginMasking,TopLogo,AppIntro,BottomWrapper} from './styles'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actionCreator'

class Login extends Component {
    constructor(props){
        super(props)
        this.EnterLogin = this.EnterLogin.bind(this)
    }
    EnterLogin(e){
        if(e.nativeEvent.keyCode === 13){
            this.props.LoginAJAX(this.props.account,this.props.password)
        }
    }
    render(){
        return(
            <LoginMasking onClick={this.props.handleLoginDis}>
                <LoginWrapper onClick={(e)=>this.props.stopPropagation(e)}>
                    <TopLogo>JimmyBlog</TopLogo>
                    <AppIntro>共同分享生活点滴</AppIntro>
                    <BottomWrapper>
                        <input type="text" placeholder="请在此处键入账号" className="Account" onChange={this.props.AccountChange} onKeyPress={this.EnterLogin}></input>
                        <input type="password" placeholder="请在此处键入密码" className="Password" onChange={this.props.PasswordChange} onKeyPress={this.EnterLogin}></input>
                        <div className="LoginBtn" onClick={()=>this.props.LoginAJAX(this.props.account,this.props.password)}>登入</div>
                    </BottomWrapper>
                </LoginWrapper>
            </LoginMasking>            
        )
    }
}

const mapState = (state)=>{
    return{
        account:state.blog.account,
        password:state.blog.password
    }
}

const mapDispath = (dispatch)=>{
    return{
        AccountChange(e){
             dispatch(actionCreator.AccountChange(e.target.value))
        },
        PasswordChange(e){
            dispatch(actionCreator.PasswordChange(e.target.value))
        },
        handleLoginDis(){
            dispatch(actionCreator.handleLoginDis()); 
        },
        stopPropagation(e){
            e.stopPropagation();
        },
        LoginAJAX(account,password){
            dispatch(actionCreator.LoginAJAX(account,password));
        }
    }
}


export default connect(mapState,mapDispath)(Login);