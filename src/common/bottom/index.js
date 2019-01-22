import React,{ Component,Fragment } from 'react';
import { BottomWrapper } from './styles';


class Bottom extends Component {
    render() {
         return (
             <Fragment>
                 <BottomWrapper>
                    <span className="left">开发者：JimmyLam</span>
                    <span className="right">Wechat:Jm18025012926</span>
                 </BottomWrapper>
             </Fragment>
        )       
    }   
}

export default Bottom