import React,{ Component,Fragment } from 'react';
import Header from '../../common/header';
import { Bg,LoginLogout,AllReadyLogin,PersonalCenter,ShowEdit,ColumnIcon,MobileNav,Mask } from './styles';
import { connect } from 'react-redux';
import Home from './pages/home';
import Center from './pages/center';
import Edit from './pages/edit';
import * as actionCreator from './store/actionCreator';
import columnIcon from '../../resource/nav.svg'
import 'animate.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Blog extends Component {
    constructor(props){
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        document.title="JimmyLam的博客"
        this.props.memoryLogin()
        if(document.documentElement.clientHeight>1024){
            const NoData = this.props.NoData
            this.props.scrollLoding(NoData,this.props.page+1)
        }
    }
    handleScroll(){
        const clientHeight = this.refs.Bg.clientHeight; //可视区域高度
        const scrollTop  = this.refs.Bg.scrollTop;  //滚动条滚动高度
        const scrollHeight = this.refs.Bg.scrollHeight; //滚动内容高度
        const slideHeight = scrollHeight - clientHeight;
        const NoData = this.props.NoData
        if(slideHeight-scrollTop===0){
            this.props.scrollLoding(NoData,this.props.page+1)
        }
    }
    render() {
         return (
             <Fragment>
                <Header>
                </Header>
                <ReactCSSTransitionGroup
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        transitionName={{
                            enter: 'fadeIn',
                            leave: 'fadeOut',
                          }}
                >
                {this.props.mobileNavShow?<Mask onClick={this.props.handleNavShow} className="animated"></Mask>:''}                
                </ReactCSSTransitionGroup>            
                {this.props.readyLogin?<AllReadyLogin><div className="welcome">欢迎您，{this.props.AjaxNickname||this.props.account}</div><div className="logout" onClick={()=>this.props.handleLogout()}>登出</div></AllReadyLogin>:<LoginLogout><li onClick={this.props.handleLoginBtn}>登入</li><li onClick={this.props.handleResBtn}>注册</li></LoginLogout>}
                {this.props.readyLogin?<PersonalCenter onClick={this.props.centerClick}>{this.props.center}</PersonalCenter>:''}
                {this.props.readyLogin?<ShowEdit onClick={this.props.editClick}>{this.props.edit}</ShowEdit>:''}
                <ColumnIcon onClick={this.props.handleNavShow}>
                    <img src={`${columnIcon}`}>
                    </img>
                </ColumnIcon>
                <ReactCSSTransitionGroup
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        transitionName={{
                            enter: 'fadeInDown',
                            leave: 'fadeOutUp',
                          }}
                    >
                {this.props.mobileNavShow?<MobileNav key="navAnimate" className={`animated faster`}>{window.localStorage.account?<ul>
                        <li>欢迎您，{this.props.AjaxNickname||this.props.account}</li>
                        <li onClick={()=>this.props.editClick('mobile')}>{this.props.edit}</li>
                        <li onClick={()=>this.props.centerClick('mobile')}>{this.props.center}</li>
                        <li onClick={()=>this.props.handleLogout('mobile')}>登出</li>
                    </ul>:<ul>
                        <li>JimmyLam博客欢迎您！</li>
                        <li onClick={()=>this.props.handleLoginBtn('mobile')}>登陆</li>
                        <li onClick={()=>this.props.handleResBtn('mobile')}>注册</li>
                    </ul>}        
                </MobileNav>:''}
                </ReactCSSTransitionGroup>
                <Bg onScroll={this.handleScroll} ref="Bg">
                    {this.props.showCenter?<Center></Center>:''}
                    {this.props.showEdit?<Edit></Edit>:''}
                    {this.props.showArticle?<Home></Home>:''}
                </Bg>
             </Fragment>
        )       
    }   
}


const mapState = (state)=>{
    return{
        mobileNavShow:state.blog.mobileNavShow,
        readyLogin:state.blog.readyLogin,
        AjaxNickname:state.blog.AjaxNickname,
        showCenter:state.blog.showCenter,
        center:state.blog.center,
        showEdit:state.blog.showEdit,
        showArticle:state.blog.showArticle,
        edit:state.blog.edit,
        page:state.blog.page,
        NoData:state.blog.NoData,
        account:state.blog.account,
        navAnimate:state.blog.navAnimate
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleNavShow(){
            dispatch(actionCreator.handleNavShow())
        },
        memoryLogin(){
            const storage = window.localStorage
            if(storage.token){
                dispatch(actionCreator.memoryLogin(storage.token))
            }
        },
        centerClick(mobile){
            if(mobile==='mobile'){
                dispatch(actionCreator.handleNavShow())
            }
            dispatch(actionCreator.centerClick());
        },
        handleLoginBtn(mobile){
            if(mobile==='mobile'){
                dispatch(actionCreator.handleNavShow())
            }
            dispatch(actionCreator.handleLoginBtn()); 
        },
        handleResBtn(mobile){
            if(mobile==='mobile'){
                dispatch(actionCreator.handleNavShow())
            }
            dispatch(actionCreator.handleResBtn());
        },
        handleLogout(mobile){
            if(mobile==='mobile'){
                dispatch(actionCreator.handleNavShow())
            }
            dispatch(actionCreator.handleLogout());
        },
        editClick(mobile){
            if(mobile==='mobile'){
                dispatch(actionCreator.handleNavShow())
            }
            dispatch(actionCreator.editClick());
        },
        scrollLoding(NoData,page){
            if(!NoData){
                dispatch(actionCreator.getBlogData(page));
            }
            
        }
    }
}


export default connect(mapState,mapDispath)(Blog);