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
            this.props.RegisterAJAX(this.props.account,this.props.password)
        }
    }
    render(){
        return (
            <LoginMasking onClick={this.props.handleLoginDis}>
                <LoginWrapper onClick={(e)=>this.props.stopPropagation(e)}>
                    <TopLogo>JimmyBlog</TopLogo>
                    <AppIntro>共同分享生活点滴</AppIntro>
                    <BottomWrapper>
                        <input type="text" placeholder="请在此处键入账号" className="Account" onChange={this.props.AccountChange} onKeyPress={this.EnterRegister}></input>
                        <input type="password" placeholder="请在此处键入密码" className="Password" onChange={this.props.PasswordChange} onKeyPress={this.EnterRegister}></input>
                        <div className="LoginBtn" onClick={()=>this.props.RegisterAJAX(this.props.account,this.props.password)}>注册</div>
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
            dispatch(actionCreator.handleResDis()); 
        },
        stopPropagation(e){
            e.stopPropagation();
        },
        RegisterAJAX(account,password){
            dispatch(actionCreator.RegisterAJAX(account,password));
        }

    }
}


export default connect(mapState,mapDispath)(Res);