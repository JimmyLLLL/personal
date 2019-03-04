import * as constants from './constants'

const defaultState = {
    imgOnload:false
};



export default (state = defaultState,action)=>{
    if(action.type === constants.HANDLEBGONLOAD){
        return{
            ...state,
            imgOnload:true
        }
    }
    return state
}