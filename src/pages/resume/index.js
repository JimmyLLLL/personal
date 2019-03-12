import React,{ Fragment,Component } from 'react';
import { ResumeWrapper,BodyWrapper,Masking } from './styles';
import HeaderContent from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import { connect } from 'react-redux'
import {actionCreator} from './components/Header/store'

class Resume extends Component{
    componentDidMount(){
        document.title="JimmyLam的求学之路"
    }
    render(){
        return(
            <Fragment>
                {this.props.isShow?<Masking onClick={this.props.handleMaskingShow} onTouchMove={this.props.handleMaskingShow}>此页用PC观看效果最佳</Masking>:''}
                <ResumeWrapper>
                    <HeaderContent></HeaderContent>
                    <BodyWrapper>
                        <Left></Left>
                        <Right></Right>
                    </BodyWrapper>
                </ResumeWrapper>
            </Fragment>            
        )
    }
   
}

const mapState = (state)=>{
    return{
        isShow:state.resumeHeader.isMaskingShow
    }
}

const mapDispath = (dispatch)=>{
    return{
        handleMaskingShow(){
            dispatch(actionCreator.showMasking());
        }
    }
}

export default connect(mapState,mapDispath)(Resume);