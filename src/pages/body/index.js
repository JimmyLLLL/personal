import React,{ Component,Fragment } from 'react';
import { connect } from 'react-redux';
import { BodyWrapper,Circleone,Circletwo,Circlethree,Circlefour,CircleWrapper } from './styles';
import { Bgpic,BgpicWrapper } from './styles.js';
import Bottom from '../../common/bottom';
import Header from '../../common/header';
import bg from '../../resource/bg.jpg'
import * as actionCreator from './store/actionCreator';

class Body extends Component {
    render() {
         return (
             <Fragment>
                <Header></Header>
                <BgpicWrapper>
                    <Bgpic src={`${bg}`} onLoad={this.props.handleBgOnload}></Bgpic>
                    <Bottom></Bottom>
                </BgpicWrapper>       
                 <BodyWrapper>
                     {this.props.imgOnload?<CircleWrapper>
                        <a href="http://localhost:3005/resume" target="_blank"><Circleone><span>简历</span></Circleone></a>
                        <a href="https://github.com/JimmyLLLL" target="_blank"><Circletwo><span>github</span></Circletwo></a>
                        <a href="http://localhost:3005/project" target="_blank"><Circlethree><span>项目</span></Circlethree></a>
                        <a href="http://localhost:3005/blog" target="_blank"><Circlefour><span>BLOG</span></Circlefour></a>           
                     </CircleWrapper>:''}
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