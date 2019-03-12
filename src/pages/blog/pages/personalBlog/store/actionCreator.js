import axios from 'axios'
import * as constants from './constants'

const storage = window.localStorage
export const getBlogData = (account,page,first) => {
    return (dispatch) => {
        axios.post('http://www.jinmylam.xin:8003/personalAPI/blog/personalGetBlog',{page,account}).then((res)=>{
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

export const handleBlogDelete = (id) => {
    return (dispatch) => {
        const token = storage.token
        axios.post('http://www.jinmylam.xin:8003/personalAPI/blog/handleBlogDelete',{id},{
            headers:{
                'Authorization':token
            }           
        }).then((res)=>{
            dispatch(RealHandleBlogDelete(res.data.code))
        })
    }
}

export const RealHandleBlogDelete = (code,data) => ({
    type:constants.BLOGDELETE,
    code
})