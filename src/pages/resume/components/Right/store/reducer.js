const defaultState = {
    rightInfo:[{theme:'SELF-INTRODUCTION',contentOne:'个人介绍',contentTwo:['SKILL'],contentThree:['熟悉DIV CSS布局，掌握JavaScript，了解HTML语义化','掌握常见移动端布局设计','熟悉响应式布局和弹性盒布局，百分比自适应布局，了解CSS3动画技术，掌握常见Animate动画库应用。','熟悉ECMA标准，掌握DOM、BOM操作，熟悉闭包原理，熟悉面向对象JS编程，理解原型链的继承机制','熟练AJAX/JSON与跨域请求','熟练使用Vue、React流行框架。','掌握CSS类库styled-component技术、Stylus技术，了解sass，了解node后台开发，了解服务端渲染机制，以及MVC&MVVM设计模式与模块化开发流程。','熟练使用Sublime，VScode等相关开发工具，掌握常见Git版本管理，了解webpack，babel等编译工具。'],time:''},
    {theme:'PROJECT EXPERIENCE',contentOne:'深大荔知公众号',contentTwo:['前端开发(技术部)'],contentThree:['担任深大荔知新版公文通的前端开发工作，以及平时日常维护。'],time:'2017.10 - 2018.07'}
]
};

export default (state = defaultState,action)=>{
    return state
}