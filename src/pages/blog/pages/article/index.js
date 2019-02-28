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
                                <div className="author">作者：{item.name}<span>ID：{item.uid}</span></div>
                                <div className="content" dangerouslySetInnerHTML = {{ __html: item.content }}></div>
                            </div>
                        )
                    })}
                </ArticleWrapper>
            </Fragment>
        )
    }
}

const mapState = (state)=>{
    return{
        enterBlog:state.blog.enterBlog
    }
}

const mapDispath = (dispatch)=>{
    return{
        enterOneBlog(id){
            dispatch(actionCreator.enterOneBlog(id))
        }
    }
}


export default connect(mapState,mapDispath)(Article);