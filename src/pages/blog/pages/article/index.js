import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import Header from '../../../../common/header';
import { ArticleWrapper } from './styles';

class Article extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.enterOneBlog(this.props.match.params.id)
        this.props.getCommentAjax(this.props.match.params.id)
    }
    render(){
        return (
            <Fragment>
                <Header></Header>
                <ArticleWrapper>
                    {this.props.enterBlog.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="title">{item.title}</div>
                                <div className="author">作者：{item.name}<span>账号：{item.uid}</span><span>发表时间：{item.moment}</span></div>
                                <div className="content" dangerouslySetInnerHTML = {{ __html: item.content }}></div>
                            </div>
                        )
                    })}
                    <div className="commentWrapper">
                        <div className="topTitle">评论区
                            <span className="commentEntry" onClick={this.props.showCommentText}>{this.props.showCommentWord}</span>
                        </div>
                        {this.props.showComment?<div className="commentTextWrapper">
                            <textarea placeholder="在此输入您的评论" className="commentText" onChange={this.props.commentChange} value={this.props.commentText}></textarea>
                            <div className="sendComment" onClick={()=>this.props.sendComment(this.props.commentText,this.props.match.params.id)}>点击此处发表评论</div>
                        </div>:''}
                        {this.props.commentList.length?'':<div className="noComment">暂无评论噢~</div>}
                        {this.props.commentList.map((item,index)=>{
                            return(
                                <div className="wrapper" key={item.id}>
                                    <div className="imgWrapper">
                                        <img src={`http://localhost:8003/uploads/avator/${item.avator}`}></img>
                                    </div>
                                    <div className="rightWrapper">
                                        <div className="userName">{item.nickname}<span>ID：{item.name}</span></div>
                                        <div className="comment">{item.content}</div>
                                        <div className="time">{(window.localStorage.account===item.name)&&(window.localStorage.account)?<div onClick={()=>{this.props.deleteComment(item.id,this.props.match.params.id)}}>删除</div>:''}{item.moment}</div>
                                    </div>
                                </div>                                
                            )
                        })}
                        
                    </div>
                    
                </ArticleWrapper>
            </Fragment>
        )
    }
}

const mapState = (state)=>{
    return{
        enterBlog:state.blog.enterBlog,
        showComment:state.blog.showComment,
        showCommentWord:state.blog.showCommentWord,
        commentText:state.blog.commentText,
        commentList:state.blog.commentList
    }
}

const mapDispath = (dispatch)=>{
    return{
        deleteComment(id,postid){
            let isSend = window.confirm("确定删除？")
            if(isSend){
                dispatch(actionCreator.deleteComment(id,postid))
            }
        },
        sendComment(text,index){
            if(text!==''){
                dispatch(actionCreator.sendComment(text,index)) 
            }    
        },
        commentChange(e){
            dispatch(actionCreator.commentChange(e.target.value))
        },
        showCommentText(){
            dispatch(actionCreator.showCommentText())
        },
        enterOneBlog(id){
            dispatch(actionCreator.enterOneBlog(id))
        },
        getCommentAjax(id){
            dispatch(actionCreator.getCommentAjax(id))
        }
        
    }
}


export default connect(mapState,mapDispath)(Article);