import * as constants from './constants';

const defaultState = {
    resumeName:'林靖珉',
    resumeNameUk:'Jimmy',
    resumeWorkAsk:'求职意向',
    resumeWork:'前端开发',
    isMaskingShow:true
};

export default (state = defaultState,action)=>{
    if(action.type === constants.SHOW_MASKING){
        return {
            ...defaultState,
            isMaskingShow:false
        }
    }
    return state
}