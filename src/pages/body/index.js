import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { BodyWrapper,Circleone,Circletwo,Circlethree,Circlefour,CircleWrapper } from './styles';
import { Bgpic,BgpicWrapper } from './styles.js';
import Bottom from '../../common/bottom';
import Header from '../../common/header';
import bg from '../../resource/bg.jpg'
import * as actionCreator from './store/actionCreator';
import 'animate.css'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Body extends Component {
    componentDidMount(){
        document.title="JimmyLam"
    }
    render() {
         return (
             <Fragment>
                <Header></Header>
                <BgpicWrapper>
                    <Bgpic src={`${bg}`} onLoad={this.props.handleBgOnload}></Bgpic>
                    <Bottom></Bottom>
                </BgpicWrapper>       
                 <BodyWrapper>
                    <ReactCSSTransitionGroup
                        transitionEnter={true}
                        transitionLeave={true}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                        transitionName="animated"
                    >
                            {this.props.imgOnload?<CircleWrapper key="mainItem" className="animated fadeInDown">
                                <a href="http://www.jinmylam.xin/#/resume" target="_blank"><Circleone><span>简历</span></Circleone></a>
                                <a href="https://github.com/JimmyLLLL" target="_blank"><Circletwo><span>github</span></Circletwo></a>
                                <a href="http://www.jinmylam.xin/#/project" target="_blank"><Circlethree><span>Demo</span></Circlethree></a>
                                <a href="http://www.jinmylam.xin/#/blog" target="_blank"><Circlefour><span>BLOG</span></Circlefour></a>           
                            </CircleWrapper>:''}                        
                    </ReactCSSTransitionGroup>
                 </BodyWrapper>
             </Fragment>
        )       
    }   
}

const mapState = (state)=>{
    return{
        imgOnload:state.body.imgOnload
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleBgOnload(){
            dispatch(actionCreator.handleBgOnload())
        }
    }
}

export default connect(mapState,mapDispath)(Body)