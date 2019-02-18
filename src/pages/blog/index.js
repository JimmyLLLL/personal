import React,{ Component,Fragment } from 'react';
import Header from '../../common/header';
import { Bg,LoginLogout,AllReadyLogin,PersonalCenter,ShowEdit } from './styles';
import { connect } from 'react-redux';
import Home from './pages/home';
import Center from './pages/center';
import Edit from './pages/edit';
import * as actionCreator from './store/actionCreator';

class Blog extends Component {
    constructor(props){
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
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
                {this.props.readyLogin?<AllReadyLogin><div className="welcome">欢迎您，{this.props.AjaxNickname}</div><div className="logout" onClick={()=>this.props.handleLogout()}>登出</div></AllReadyLogin>:<LoginLogout><li onClick={this.props.handleLoginBtn}>登入</li><li onClick={this.props.handleResBtn}>注册</li></LoginLogout>}
                {this.props.readyLogin?<PersonalCenter onClick={this.props.centerClick}>{this.props.center}</PersonalCenter>:''}
                {this.props.readyLogin?<ShowEdit onClick={this.props.editClick}>{this.props.edit}</ShowEdit>:''}
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
        readyLogin:state.blog.readyLogin,
        AjaxNickname:state.blog.AjaxNickname,
        showCenter:state.blog.showCenter,
        center:state.blog.center,
        showEdit:state.blog.showEdit,
        showArticle:state.blog.showArticle,
        edit:state.blog.edit,
        page:state.blog.page,
        NoData:state.blog.NoData
    }
}

const mapDispath = (dispatch)=>{
    return{
        centerClick(){
            dispatch(actionCreator.centerClick());
        },
        handleLoginBtn(){
            dispatch(actionCreator.handleLoginBtn()); 
        },
        handleResBtn(){
            dispatch(actionCreator.handleResBtn());
        },
        handleLogout(){
            dispatch(actionCreator.handleLogout());
        },
        editClick(){
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