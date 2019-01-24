import React,{ Component,Fragment } from 'react';
import { ResumeWrapper,BodyWrapper } from './styles';
import HeaderContent from './components/Header'
import Left from './components/Left'
import Right from './components/Right'



class Resume extends Component {
    render() {
         return (
             <Fragment>
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

export default Resume;