// 配置路由的文件
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
// 配置路由
export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:"/home",   // 主页
            component:Home
        },
        {
            path:"/search", // 搜索
            component:Search
        },
        {
            path:"/login",  // 登录
            component:Login
        },
        {
            path:"/register",   // 注册
            component:Register
        },
    ]
})