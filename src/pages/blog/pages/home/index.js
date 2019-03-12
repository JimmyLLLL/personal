import React,{ Fragment,Component } from 'react';
import { BlogWrapper,LeftWrapper,RightWrapper,LeftHeader,LeftContent,LeftContentHeader,LeftContentCon,LeftContentBottom } from './styles'
import { connect } from 'react-redux'
import Login from '../login'
import Res from '../register'
import * as actionCreator from '../../store/actionCreator'

class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const height = window.innerHeight;
        this.props.getBlogData(1,'first')
        this.props.getNetHeight(height)
    }
    render(){
        return(
            <Fragment>    
                <BlogWrapper>
                    <LeftWrapper>
                        <LeftHeader>技术专栏</LeftHeader>
                        {this.props.blogContent.map((item,index)=>{
                            return(
                                <LeftContent key={index}>
                                    <a href={`/#/blog/article/${item.id}`} target="_blank"><LeftContentHeader>{item.title}</LeftContentHeader></a>
                                    <a href={`/#/blog/article/${item.id}`} target="_blank"><LeftContentCon dangerouslySetInnerHTML = {{ __html: item.content }}></LeftContentCon></a>
                                    <LeftContentBottom>
                                        <i className="iconfont icon-aixin1"></i>
                                        <span className="bottomSpan">{item.pv}</span>
                                        <i className="iconfont icon-pinglun secondI"></i>
                                        <span className="bottomSpan">评论({item.comments})</span>
                                    </LeftContentBottom>
                                </LeftContent>
                            )
                        })}
                        {this.props.firstLoadingFinish&&this.props.blogContent.length>=10?<div className="loading">{this.props.LoadingWord}</div>:''}
                    </LeftWrapper>
                    <RightWrapper>
                        <ul className="rightUl">
                            {this.props.selectList.map((item,index)=>{
                                return(
                                    <li className={item.className} key={index}>{item.key}</li>
                                )
                            })}
                        </ul>
                    </RightWrapper>
                </BlogWrapper>
                {this.props.showLogin?<Login></Login>:''}
                {this.props.showRES?<Res></Res>:''}
            </Fragment>            
        )
    }
}

const mapState = (state)=>{
    return{
        blogContent:state.blog.blogContent,
        selectList:state.blog.selectList,
        nowSelect:state.blog.nowSelect,
        showLogin:state.blog.showLogin,
        showRES:state.blog.showRES,
        firstLoadingFinish:state.blog.firstLoadingFinish,
        LoadingWord:state.blog.LoadingWord
    }
}

const mapDispath = (dispatch)=>{
    return{
        getBlogData(page){
            dispatch(actionCreator.getBlogData(page,'first'))
        },
        getNetHeight(height){
            dispatch(actionCreator.getNetHeight(height))
        }
    }
}


export default connect(mapState,mapDispath)(Home);