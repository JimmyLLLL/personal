import React,{ Component,Fragment } from 'react';
import { BodyWrapper,Circleone,Circletwo,Circlethree,Circlefour,CircleWrapper } from './styles';


class Body extends Component {
    render() {
         return (
             <Fragment>
                 <BodyWrapper>
                     <CircleWrapper>
                        <Circleone><span>简历</span></Circleone>
                        <Circletwo><span>github</span></Circletwo>
                        <Circlethree><span>项目</span></Circlethree>
                        <Circlefour><span>闲谈</span></Circlefour>                         
                     </CircleWrapper>
                 </BodyWrapper>
             </Fragment>
        )       
    }   
}

export default Body;