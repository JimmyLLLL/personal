import React,{ Component,Fragment } from 'react';
import { BodyWrapper,Circleone,Circletwo,Circlethree,Circlefour,CircleWrapper } from './styles';
import { Bgpic,BgpicWrapper } from './styles.js';
import Bottom from '../../common/bottom';
import { Link } from 'react-router-dom';
import Header from '../../common/header';


class Body extends Component {
    render() {
         return (
             <Fragment>
                <Header></Header>
                <BgpicWrapper>
                    <Bgpic></Bgpic>
                    <Bottom></Bottom>
                </BgpicWrapper>       
                 <BodyWrapper>
                     <CircleWrapper>
                        <Link to="/resume"><Circleone><span>简历</span></Circleone></Link>
                        <a href="https://github.com/JimmyLLLL"><Circletwo><span>github</span></Circletwo></a>
                        <Link to="/project"><Circlethree><span>项目</span></Circlethree></Link>
                        <Link to="/blog"><Circlefour><span>BLOG</span></Circlefour></Link>                   
                     </CircleWrapper>
                 </BodyWrapper>
             </Fragment>
        )       
    }   
}

export default Body;