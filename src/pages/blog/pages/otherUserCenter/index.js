import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import { CenterWrapper,Bg } from './styles';
import Header from '../../../../common/header';


class Otherusercenter extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUserData(this.props.match.params.name)
    }
    render(){
        return (
            <Fragment>
                <Header></Header>
                <Bg>
                    <CenterWrapper>
                        <span className="wrapper">
                            <div className="avatarWrapper">
                                <img className="avatar" src={`http://www.jinmylam.xin:8003/uploads/avator/${this.props.userInfo.avator}`} alt="用户头像"></img>
                            </div>                                  
                            <div className="key">账号: {this.props.userInfo.name}</div>
                            <div className="key">BLOG</div><a href={`http://www.jinmylam.xin/#/blog/personalBlog/${this.props.match.params.name}`} target="_blank" className="blogA"><div className="value red">这是一条时光隧道，在此见证此用户的过去的记录</div></a>
                            <div className="key">昵称: {this.props.userInfo.nickname}</div>
                            <div className="key">个性签名: {this.props.userInfo.word}</div>
                        </span>
                    </CenterWrapper>
                </Bg>
            </Fragment>
        )
    }
}

const mapState = (state)=>{
    return{
        userInfo:state.otherUserCenter.userInfo
    }
}

const mapDispath = (dispatch)=>{
    return{
        getUserData(name){
            dispatch(actionCreator.getUserData(name))
        }
    }
}


export default connect(mapState,mapDispath)(Otherusercenter);