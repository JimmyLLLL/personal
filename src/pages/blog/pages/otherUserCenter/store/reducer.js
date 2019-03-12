import * as constants from './constants';

const defaultState = {
   userInfo:{}
};

export default (state = defaultState,action)=>{
    if(action.type === constants.GETUSERDATA){
        if(action.code===1){
            const newState = JSON.parse(JSON.stringify(state))
            newState.userInfo = action.data[0]
            return newState
        }else{
            alert('数据库出现错误')
        }
        
    }
    return state
}