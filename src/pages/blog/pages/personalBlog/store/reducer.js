import * as constants from './constants';
const defaultState = {
    nowSelect:'技术专栏',
    selectList:[{key:'技术专栏',className:'selectLi'},{key:'旅行',className:''},{key:'心境',className:''}],
    blogContent:[],
    firstLoadingFinish:false,
    LoadingWord:'↓ Loading...',
    page:1,
    netHeight:0,
    NoData:false
};

export default (state = defaultState,action)=>{
    if(action.type === constants.BLOGDELETE){
        if(action.code===1){
            window.location.reload();
        }else if(action.code===0){
            alert('登陆信息过期')
        }else if(action.code===-1){
            alert('数据库挂掉了')
        }else if(action.code===-2){
            alert('不要乱搞搞啊，小博客经不起攻击')
        }
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
    return state
}