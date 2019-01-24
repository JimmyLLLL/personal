const defaultState = {
    rightInfo:[{theme:'SELF-INTRODUCTION',contentOne:'个人介绍',contentTwo:['SKILL'],contentThree:['熟悉DIV CSS布局，掌握JavaScript，熟悉W3C标准，了解HTML语义化','熟练使用浏览器兼容技术，熟悉移动端布局设计','熟悉响应式布局和弹性盒布局，百分比自适应布局，了解CSS3动画技术，能熟练应用Animate动画库。','熟悉掌握基于HTML5的WEBAPP开发以及各种手机移动端适配，熟悉ECMA标准，熟练DOM、BOM操作，熟悉闭包原理，熟悉面向对象JS编程，理解原型链的继承机制','熟练AJAX/JSON与跨域请求','熟练使用Vue、React流行框架。','掌握CSS类库Sass技术、Stylus技术，了解node后台开发，了解服务端渲染机制，以及MVC&MVVM设计模式与模块化开发流程。','熟练使用Sublime，VScode等相关开发工具，熟悉Git版本管理，了解webpack，babel等编译工具。'],time:''},
    {theme:'PROJECT EXPERIENCE',contentOne:'深大荔知公众号',contentTwo:['前端开发(技术部)'],contentThree:['担任深大荔知新版公文通的前端开发工作，以及后台管理前端开发工作，平时日常维护。'],time:'2017.09 - 2018.09'}
]
};

export default (state = defaultState,action)=>{
    return state
}