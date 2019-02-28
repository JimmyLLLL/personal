import * as constants from './constants';
import axios from 'axios';
const storage = window.localStorage;

const defaultState = {
    nowSelect:'技术专栏',
    selectList:[{key:'技术专栏',className:'selectLi'},{key:'旅行',className:''},{key:'心境',className:''}],
    blogContent:[],
    showLogin:false,
    showRES:false,
    account:'',
    password:'',
    readyLogin:false,
    avator:'',    
    center:'个人中心',
    edit:'写文章',
    showEdit:false,
    showArticle:true,
    showCenter:false,
    editTitle:'',
    editContent:'',
    page:1,
    netHeight:0,
    firstLoadingFinish:false,
    LoadingWord:'↓ Loading...',
    NoData:false,
    enterBlog:[],
    word:'',
    nickname:'',
    AjaxWord:'',
    AjaxNickname:''
};



export default (state = defaultState,action)=>{
    if(action.type === constants.GETNEWAVATOR){
        return{
            ...state,
            avator:'http://localhost:8003/uploads/avator/'+action.newAvator
        }
    }
    if(action.type === constants.AVATORUSER){
        return{
            ...state,
            avatorUser:action.avatorUser
        }
    }
    if(action.type === constants.PERSONALINFOCHANGE){
        if(action.code===1){
            alert('修改成功')
            return{
                ...state,
                word:'',
                nickname:'',
                AjaxNickname:action.data.nickname,
                AjaxWord:action.data.word
            }            
        }else if(action.code===0){
            alert('服务器挂了')
        }else if(action.code===-1){
            alert('登陆信息已经过期，请重新登录')
            storage.token=''
            storage.account=''
            window.location.reload();
        }

    }
    if(action.type === constants.NICKNAMECHANGE){
        return{
            ...state,
            nickname:action.value
        }
    }
    if(action.type === constants.WORDCHANGE){
        return{
            ...state,
            word:action.value
        }
    }
    if(action.type === constants.ONEBLOG){
        if(action.code === 1){
            return {
                ...state,
                enterBlog:action.data
            }
        }else{
            alert('获取数据失败')
        }
    }
    if(action.type === constants.NETHEIGHT){
        return{
            ...state,
            netHeight:action.height
        }

    }
    if(action.type === constants.GETBLOG){
        if(action.code === 1){
            const data = action.data
            if(data.length!=0){
                if(action.first=='first'){
                    return {
                        ...state,
                        firstLoadingFinish:true,
                        blogContent:[...data]
                    }               
                }
                const page = state.page+1
                return {
                    ...state,
                    page,
                    blogContent:[...state.blogContent,...data]
                }                
            }else{
                return{
                    ...state,
                    LoadingWord:'没有更多数据~',
                    NoData:true
                }                
            }

        }
    }
    if(action.type === constants.EDITAJAX){
        if(action.value === 1){
            alert('发表成功')
            return {
                ...state,
                editTitle:'',
                editContent:'',
                edit:'写文章',
                showEdit:false,
                showArticle:true,
                LoadingWord:'↓ Loading...',
                firstLoadingFinish:false,
                NoData:false,
                page:1

            }
        }else if(action.value === 0){
            alert('服务器挂了')
        }else if(action.value === -1){
            alert('登陆信息已经过期，请重新登录')
            storage.token=''
            storage.account=''
            window.location.reload();
        }
    }
    if(action.type === constants.EDITTITLE){
        return {
            ...state,
            editTitle:action.value
        }
    }
    if(action.type === constants.EDITCONTENT){
        return {
            ...state,
            editContent:action.value
        }
    }
    if(action.type === constants.SHOWEDIT){
        if(state.showEdit===false){
            return {
                ...state,
                edit:'回到主页',
                showCenter:false,
                showArticle:false,
                showEdit:!state.showEdit,
                center:'个人中心'
            }
        }else{
            return {
                ...state,
                edit:'写文章',
                showCenter:false,
                showArticle:true,
                showEdit:!state.showEdit,
                LoadingWord:'↓ Loading...',
                firstLoadingFinish:false,
                NoData:false,
                page:1
            }            
        }
    }
    if(action.type === constants.SHOWCENTER)
    {
        if(state.showCenter===false){
            return {
                ...state,
                showEdit:false,
                showArticle:false,
                center:'回到主页',
                showCenter:!state.showCenter,
                edit:'写文章'
            }            
        }else{
            return {
                ...state,
                showEdit:false,
                center:'个人中心',
                showArticle:true,
                showCenter:!state.showCenter,
                LoadingWord:'↓ Loading...',
                firstLoadingFinish:false,
                NoData:false,
                page:1
            }             
        }
 
    }
    if(action.type === constants.SHOW_LOGIN)
    {
        return {
            ...state,
            showLogin:true
        }
    }
    if(action.type === constants.DIS_LOGIN)
    {
        return {
            ...state,
            showLogin:false
        }
    }
    if(action.type === constants.DIS_RES)
    {
        return{
            ...state,
            showRES:false
        }
    }
    if(action.type === constants.SHOW_RES)
    {
        return{
            ...state,
            showRES:true
        }
    }
    if(action.type === constants.ACCOUNT)
    {
        return{
            ...state,
            account:action.value
        }
    }
    if(action.type === constants.PASSWORD)
    {
        return{
            ...state,
            password:action.value
        }
    }
    if(action.type === constants.LOGINAJAX)
    {
        if(action.code===1){
            storage.token = action.token
            storage.account = action.account
            storage.nickname = action.nickname
            if(action.auto!=='auto'){
                alert('登陆成功')
            }
            return{
                ...state,
                AjaxWord:action.word,
                AjaxNickname:action.nickname,
                account:action.account,
                readyLogin:true,
                showLogin:false,
                avator:'http://localhost:8003/uploads/avator/'+action.avator
            }            
        }else if(action.code===-2){
            alert('用户不存在')
        }else if(action.code===-1){
            if(action.auto!=='auto'){
                alert('密码不正确')
            }
            
        }

    }
    if(action.type === constants.REGISTERAJAX)
    {

        if(action.code===1){
            alert('注册成功')
            return{
                ...state,
                showRES:false
            }
        }else{
            alert('出错')
        }

    }
    if(action.type === constants.HANDLELOGOUT)
    {
        storage.account=''
        storage.token=''
        storage.nickname=''
        return{
            ...state,
            readyLogin:false
        }
    }
    return state
}