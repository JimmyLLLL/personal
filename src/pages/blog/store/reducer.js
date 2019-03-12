import * as constants from './constants';
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
    AjaxNickname:'',
    allowAccount:true,
    allowPassword:true,
    existAccount:false,
    showComment:false,
    showCommentWord:'我也评论两句~',
    commentText:'',
    commentList:[],
    mobileNavShow:false,
    navAnimate:'fadeInDown'
};



export default (state = defaultState,action)=>{
    if(action.type === constants.HANDLENAVSHOW){
        const newState = JSON.parse(JSON.stringify(state))
        newState.mobileNavShow = !newState.mobileNavShow
        return newState
    }
    if(action.type === constants.DELETECOMMENT){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code===1){
            console.log(action.returnInfo)
            newState.commentList = action.returnInfo.reverse()
            return newState
        }else if(action.code===-1){
            alert('身份信息过期')
            storage.token = ''
            storage.account = ''
            storage.nickname = ''
        }else if(action.code===0){
            alert('服务器出错')
        }
    }
    if(action.type === constants.GETCOMMENTAJAX){
        const newState = JSON.parse(JSON.stringify(state))
        newState.commentList = action.value.reverse()
        return newState
    }
    if(action.type === constants.SENDCOMMENT){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code===1){
            newState.commentList = action.data.reverse()
            newState.commentText = ''
            alert('发表成功')
            return newState
        }else{
            storage.token = ''
            storage.account = ''
            storage.nickname = ''
            alert('账号已过期')
        }
    }
    if(action.type === constants.COMMENTCHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.commentText = action.value
        return newState
    }
    if(action.type === constants.SHOWCOMMENTTEXT){
        const newState = JSON.parse(JSON.stringify(state))
        if(state.showCommentWord==='折叠回来'){
            newState.showComment = false
            newState.showCommentWord = '我也评论两句~'
            return newState
        }else{
            newState.showComment = true
            newState.showCommentWord = '折叠回来'
            return newState     
        }
    }
    if(action.type === constants.CHECKACCOUNT){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code === 1){
            newState.existAccount = true
            return newState
        }else{
            newState.existAccount = false
            return newState
        }
    }
    if(action.type === constants.ALLOWACCOUNT){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.flag===false){
            newState.allowAccount = false
            return newState
        }else{
            newState.allowAccount = true
            return newState
        }
    }
    if(action.type === constants.ALLOWPASSWORD){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.flag===false){
            newState.allowPassword = false
            return newState
        }else{
            newState.allowPassword = true
            return newState
        }
    }
    if(action.type === constants.GETNEWAVATOR){
        const newState = JSON.parse(JSON.stringify(state))
        newState.avator = 'http://www.jinmylam.xin:8003/uploads/avator/'+action.newAvator
        return newState
    }
    if(action.type === constants.AVATORUSER){
        const newState = JSON.parse(JSON.stringify(state))
        newState.avatorUser = action.avatorUser
        return newState
    }
    if(action.type === constants.PERSONALINFOCHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code===1){
            alert('修改成功')
            newState.word = ''
            newState.nickname = ''
            newState.AjaxNickname = action.data.nickname
            newState.AjaxWord = action.data.word
            return newState            
        }else if(action.code===0){
            alert('服务器挂了')
        }else if(action.code===-1){
            alert('登陆信息已经过期，请重新登录')
            storage.token=''
            storage.account=''
            storage.nickname=''
            window.location.reload();
        }

    }
    if(action.type === constants.NICKNAMECHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.nickname = action.value
        return newState
    }
    if(action.type === constants.WORDCHANGE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.word = action.value
        return newState
    }
    if(action.type === constants.ONEBLOG){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code === 1){
            newState.enterBlog = action.data
            return newState
        }else{
            alert('获取数据失败')
        }
    }
    if(action.type === constants.NETHEIGHT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.netHeight = action.height
        return newState

    }
    if(action.type === constants.GETBLOG){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code === 1){
            const data = action.data
            if(data.length!==0){
                if(action.first==='first'){
                    newState.firstLoadingFinish = true
                    newState.blogContent = [...data]
                    return newState              
                }
                const page = state.page+1
                newState.page = page
                newState.blogContent = [...newState.blogContent,...data]
                return newState             
            }else{
                newState.LoadingWord = '没有更多数据~'
                newState.NoData = true
                return newState                
            }

        }
    }
    if(action.type === constants.EDITAJAX){
        const newState = JSON.parse(JSON.stringify(state))
        if(action.value === 1){
            alert('发表成功')
            newState.editTitle = ''
            newState.editContent = ''
            newState.edit = '写文章'
            newState.showEdit = false
            newState.showArticle = true
            newState.LoadingWord = '↓ Loading...'
            newState.firstLoadingFinish = false
            newState.NoData = false
            newState.page = 1
            return newState
        }else if(action.value === 0){
            alert('服务器挂了')
        }else if(action.value === -1){
            alert('登陆信息已经过期，请重新登录')
            storage.token=''
            storage.account=''
            storage.nickname=''
            window.location.reload();
        }
    }
    if(action.type === constants.EDITTITLE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.editTitle = action.value
        return newState
    }
    if(action.type === constants.EDITCONTENT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.editContent = action.value
        return newState
    }
    if(action.type === constants.SHOWEDIT){
        const newState = JSON.parse(JSON.stringify(state))
        if(state.showEdit===false){
            newState.edit = '回到主页'
            newState.showCenter = false
            newState.showArticle = false
            newState.showEdit = !newState.showEdit
            newState.center = '个人中心'            
            return newState
        }else{
            newState.edit = '写文章'
            newState.showCenter = false
            newState.showArticle = true
            newState.showEdit = !newState.showEdit
            newState.LoadingWord = '↓ Loading...'
            newState.firstLoadingFinish = false
            newState.NoData = false
            newState.page = 1          
            return newState            
        }
    }
    if(action.type === constants.SHOWCENTER)
    {
        const newState = JSON.parse(JSON.stringify(state))
        if(state.showCenter===false){
            newState.showEdit = false
            newState.showArticle = false
            newState.center = '回到主页'
            newState.showCenter = !newState.showCenter
            newState.edit = '写文章'
            return newState            
        }else{
            newState.showEdit = false
            newState.showArticle = true
            newState.center = '个人中心'
            newState.showCenter = !newState.showCenter
            newState.LoadingWord = '↓ Loading...'
            newState.firstLoadingFinish = false
            newState.NoData = false
            newState.page = 1
            return newState          
        }
 
    }
    if(action.type === constants.SHOW_LOGIN)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.showLogin = true
        return newState
    }
    if(action.type === constants.DIS_LOGIN)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.showLogin = false
        return newState
    }
    if(action.type === constants.DIS_RES)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.showRES = false
        return newState
    }
    if(action.type === constants.SHOW_RES)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.showRES = true
        return newState
    }
    if(action.type === constants.ACCOUNT)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.account = action.value
        return newState
    }
    if(action.type === constants.PASSWORD)
    {
        const newState = JSON.parse(JSON.stringify(state))
        newState.password = action.value
        return newState
    }
    if(action.type === constants.LOGINAJAX)
    {
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code===1){
            storage.token = action.token
            storage.account = action.account
            storage.nickname = action.nickname
            if(action.auto!=='auto'){
                alert('登陆成功')
            }
            newState.AjaxWord = action.word
            newState.AjaxNickname = action.nickname
            newState.account = action.account
            newState.readyLogin = true
            newState.showLogin = false
            newState.avator = 'http://www.jinmylam.xin:8003/uploads/avator/'+action.avator
            return newState           
        }else if(action.code===-2){
            alert('用户不存在')
        }else if(action.code===-1){
            if(action.auto!=='auto'){
                alert('密码不正确')
            }
            storage.token = ''
            storage.nickname = ''
            storage.account = ''
        }

    }
    if(action.type === constants.REGISTERAJAX)
    {
        const newState = JSON.parse(JSON.stringify(state))
        if(action.code===1){
            alert('注册成功')
            newState.showRES = false
            return newState
        }else{
            alert('出错')
        }

    }
    if(action.type === constants.HANDLELOGOUT)
    {
        const newState = JSON.parse(JSON.stringify(state))
        storage.account=''
        storage.token=''
        storage.nickname=''
        newState.readyLogin = false
        newState.showEdit = false
        newState.showArticle = true
        newState.showCenter = false
        newState.center = '个人中心'
        newState.edit = '写文章'
        return newState
    }
    return state
}