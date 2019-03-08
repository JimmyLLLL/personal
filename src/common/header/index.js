import React,{ Component,Fragment } from 'react';
import { HeaderWrapper } from './styles';


class Header extends Component {
    render() {
         return (
             <Fragment>          
                 <HeaderWrapper>
                     {this.props.msg?this.props.msg:'JimmyLam'}
                 </HeaderWrapper>
             </Fragment>
        )       
    }   
}

export default Header;