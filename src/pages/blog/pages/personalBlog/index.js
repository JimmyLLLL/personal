import React,{ Fragment,Component } from 'react';
import Header from '../../../../common/header';
import { BlogWrapper,LeftWrapper,RightWrapper,LeftHeader,LeftContent,LeftContentHeader,LeftContentCon,LeftContentBottom,Bg} from './styles'
import { connect } from 'react-redux'
import * as actionCreator from './store/actionCreator'
class Personalblog extends Component {
    constructor(props){
        super(props)
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        this.props.getBlogData(this.props.match.params.name,1,'first')
        if(document.documentElement.clientHeight>1024){
            const NoData = this.props.NoData
            this.props.scrollLoding(this.props.match.params.name,NoData,this.props.page+1)
        }
    }
    handleScroll(){
        const clientHeight = this.refs.Bg.clientHeight; //可视区域高度
        const scrollTop  = this.refs.Bg.scrollTop;  //滚动条滚动高度
        const scrollHeight = this.refs.Bg.scrollHeight; //滚动内容高度
        const slideHeight = scrollHeight - clientHeight;
        const NoData = this.props.NoData
        if(slideHeight-scrollTop===0){
            this.props.scrollLoding(this.props.match.params.name,NoData,this.props.page+1)
        }
    }
    render(){
        return(
            <Fragment>
                {this.props.match.params.name?<Header msg={`欢迎您访问${this.props.match.params.name}的博客空间`}></Header>:<Header msg={`欢迎您，${window.localStorage.nickname}！这是您专属的博客空间`}></Header>}
                <Bg onScroll={this.handleScroll} ref="Bg">    
                    <BlogWrapper>
                        <LeftWrapper>
                            <LeftHeader>技术专栏</LeftHeader>
                            {this.props.blogContent.map((item,index)=>{
                                return(
                                    <LeftContent key={index}>
                                        <a href={`article/${item.id}`} target="_blank"><LeftContentHeader>{item.title}</LeftContentHeader></a>
                                        <a href={`article/${item.id}`} target="_blank"><LeftContentCon dangerouslySetInnerHTML = {{ __html: item.content }}></LeftContentCon></a>
                                        <LeftContentBottom>
                                            <i className="iconfont icon-aixin1"></i>
                                            <span className="bottomSpan">{item.pv}</span>
                                            <i className="iconfont icon-pinglun secondI"></i>
                                            <span className="bottomSpan">评论({item.comments})</span>
                                            {this.props.match.params.name?'':<span className="deleteBlog" onClick={()=>this.props.handleBlogDelete(item.id)}>删除</span>}
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
                </Bg>      
            </Fragment>            
        )
    }
}

const mapState = (state)=>{
    return{
        blogContent:state.personalBlog.blogContent,
        selectList:state.personalBlog.selectList,
        nowSelect:state.personalBlog.nowSelect,
        firstLoadingFinish:state.personalBlog.firstLoadingFinish,
        LoadingWord:state.personalBlog.LoadingWord,
        page:state.personalBlog.page,
        NoData:state.personalBlog.NoData
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleBlogDelete(id){
            let isSend = window.confirm("确定删除？")
            if(isSend){
            dispatch(actionCreator.handleBlogDelete(id))
            }
        },
        getBlogData(flag,page){
            if(flag){
                dispatch(actionCreator.getBlogData(flag,page,'first'))
            }else{
                const storage = window.localStorage
                const account = storage.account
                dispatch(actionCreator.getBlogData(account,page,'first'))  
            }
            
        },
        scrollLoding(flag,NoData,page){
            if(!NoData){
                if(flag){
                    dispatch(actionCreator.getBlogData(flag,page))
                }else{
                    const storage = window.localStorage
                    const account = storage.account
                    dispatch(actionCreator.getBlogData(account,page));
                }
               
            }  
        }
    }
}


export default connect(mapState,mapDispath)(Personalblog);