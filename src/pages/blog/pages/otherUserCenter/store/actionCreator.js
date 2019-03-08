import axios from 'axios'
import * as constants from './constants'

export const getUserData = (name) => {
    return (dispatch) => {
        axios.post('http://localhost:8003/personalAPI/blog/findDataByName',{name}).then((res)=>{
            const code = res.data.code
            const data = res.data.data
            dispatch(RealGetUserData(code,data))
        })
    }
}

export const RealGetUserData = (code,data) => ({
    type:constants.GETUSERDATA,
    code,
    data
})