const defaultState = {
    INFO:[{key:'Name',content:'林靖珉'},{key:'Location',content:'广东省 深圳市 南山区'},{key:'Phone',content:'15602951728'},{key:'E-mail',content:'851664281@qq.com'},{key:'Wechat',content:'Jm18025012926'}],
    EDUCATION:[{school:'深圳大学',time:'2016.09 - 2020.06',addition:['信息工程系 通信工程专业','语言：普通话、粤语、英语四级']}],
    HOBBIES:['关注科技圈动态','爱运动','喜欢香港文化']
};

export default (state = defaultState,action)=>{
    return state
}