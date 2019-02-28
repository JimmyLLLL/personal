import * as constants from './constants'
import axios from 'axios';
const storage = window.localStorage

export const handleLoginBtn = () => ({
    type:constants.SHOW_LOGIN
})

export const handleLoginDis = () =>({
    type:constants.DIS_LOGIN
})

export const handleResDis = () => ({
    type:constants.DIS_RES
})

export const handleResBtn = () => ({
    type:constants.SHOW_RES
})

export const AccountChange = (value) =>({
    type:constants.ACCOUNT,
    value
})

export const PasswordChange = (value) =>({
    type:constants.PASSWORD,
    value
})

export const LoginAJAX = (account,password)=>{
    return (dispatch)=>{
        axios.post('http://localhost:8003/personalAPI/blog/login',{
            account,
            password
        }).then((res)=>{
            const code = res.data.code
            const token = res.data.token
            const account = res.data.account
            const nickname = res.data.nickname
            const avator = res.data.avator
            const word = res.data.word
            dispatch(RealLoginAJAX(code,token,account,nickname,word,'',avator))
        })
    }
}
export const RealLoginAJAX = (code,token,account,nickname,word,auto='',avator)=>({
    type:constants.LOGINAJAX,
    code,
    token,
    account,
    nickname,
    word,
    auto,
    avator
})


export const RegisterAJAX = (account,password) => {
    return (dispatch)=>{
        axios.post('http://localhost:8003/personalAPI/blog/register',{
            account,
            password
    }).then((res)=>{
        const code = res.data.code
        dispatch(RealRegisterAJAX(code))
    })
    }
}

export const RealRegisterAJAX = (code) => ({
    type:constants.REGISTERAJAX,
    code
})

export const handleLogout = () => {
    const token = storage.token
    const account = storage.account
    return (dispatch) => {
            dispatch(RealHandleLogout())
    }
}

export const RealHandleLogout = () => ({
    type:constants.HANDLELOGOUT
})

export const centerClick = () => ({
    type:constants.SHOWCENTER
})

export const editClick = () => ({
    type:constants.SHOWEDIT
})

export const EditTitleChange = (value) => ({
    type:constants.EDITTITLE,
    value
})

export const EditContentChange = (value) => ({
    type:constants.EDITCONTENT,
    value
})

export const EditBtnClick = (title,content) => {
    const token = storage.token
    const nickname = storage.nickname
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/sendEdit',{title,content,nickname},{
            headers:{
                'Authorization':token
            }
        }).then((res)=>{
            const code = res.data.code
            dispatch(RealEditBtnClick(code))
        })
    }
}

export const RealEditBtnClick = (value) => ({
    type:constants.EDITAJAX,
    value
})

export const getBlogData = (page,first)=> {
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/getBlog',{page}).then((res)=>{
            const code = res.data.code
            const data = res.data.data
            dispatch(RealGetBlogData(code,data,first))
        })
    }
}

export const RealGetBlogData = (code,data,first) => ({
    type:constants.GETBLOG,
    first,
    code,
    data
})

export const getNetHeight = (height) => ({
    type:constants.NETHEIGHT,
    height
})

export const enterOneBlog = (id) => {
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/enterBlog',{id}).then((res)=>{
            const code = res.data.code
            const data = res.data.data
            dispatch(RealEnterOneBlog(code,data))
        })

    }
}

export const RealEnterOneBlog = (code,data) => ({
    type:constants.ONEBLOG,
    code,
    data
})

export const nicknameChange = (value) => ({
    type:constants.NICKNAMECHANGE,
    value
})

export const wordChange = (value) => ({
    type:constants.WORDCHANGE,
    value
})

export const PersonalInfoChange = (word,nickname) => {
    const token = storage.token
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/PersonalInfoChange',{word,nickname},{
            headers:{
                'Authorization':token
            }

        }).then((res)=>{
            const code = res.data.code
            const data = res.data.newInfo
            dispatch(RealPersonalInfoChange(code,data))
        })
    }
}

export const RealPersonalInfoChange = (code,data) => ({
    type:constants.PERSONALINFOCHANGE,
    code,
    data
})

export const memoryLogin = (token) => {
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/memoryLogin',{},{
            headers:{
                'Authorization':token
            }           
        }).then((res)=>{
            const code = res.data.code
            const token = res.data.token
            const account = res.data.account
            const nickname = res.data.nickname
            const word = res.data.word
            const auto = 'auto'
            const avator = res.data.avator
            dispatch(RealLoginAJAX(code,token,account,nickname,word,auto,avator))
        })
    }
}

export const avatorSubmitValid = (submitDom,noIframe) => {
    const token = storage.token
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/uploadAvatorValid',{},{
            headers:{
                'Authorization':token
            }           
        }).then((res)=>{
            if(res.data.code===1){
                dispatch(AvatorUser(res.data.account))
                submitDom.click()
                setTimeout(()=>{
                    const account = window.localStorage.account
                    dispatch(getNewAvator(account))
                },500)
                
            }else{
                dispatch(LoginTimeOut(res.data.code))
            }
        })        
    }
}
export const LoginTimeOut = (code) => ({
    type:constants.PERSONALINFOCHANGE,//公用接口，处理登陆超时
    code
})

export const AvatorUser = (avatorUser) => ({
    type:constants.AVATORUSER,
    avatorUser
})

export const getNewAvator = (account) => {
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/getNewAvator',{account}).then((res)=>{
            const avator = res.data.avator
            dispatch(RealGetNewAvator(avator))
        })
    }
}
export const RealGetNewAvator = (newAvator) => ({
    type:constants.GETNEWAVATOR,
    newAvator
})