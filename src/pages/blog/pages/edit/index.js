import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../store/actionCreator';
import { EditWrapper } from './styles';

class Edit extends Component{
    render(){
        return (
            <EditWrapper>
                <input className="title" placeholder="请在此输入标题" onChange={this.props.titleChange} value={this.props.title}></input>
                <textarea className="content" onChange={this.props.contentChange} value={this.props.content}></textarea>
                <div className="btn" onClick={()=>this.props.btnClick(this.props.title,this.props.content)}>确定</div>
            </EditWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        title:state.blog.editTitle,
        content:state.blog.editContent
    }
}

const mapDispath = (dispatch)=>{
    return{
        titleChange(e){
            dispatch(actionCreator.EditTitleChange(e.target.value))
        },
        contentChange(e){
            dispatch(actionCreator.EditContentChange(e.target.value))
        },
        btnClick(title,content){
            if(title!==''&&content!==''){
                dispatch(actionCreator.EditBtnClick(title,content))    
            }
        }
    }
}


export default connect(mapState,mapDispath)(Edit);