var Home = Vue.extend({
    template : '<h1>This is the home page</h1>'
});
// 二级导航
var Biz = Vue.extend({
    template : '#nav2'
});
// 创建根组件
var App = Vue.extend({})
// 创建路由器实例
var router = new VueRouter()
// 通过路由器实例定义路由规则（需要在启动应用前定义好）
// 每条路由会映射到一个组件。这个值可以是由 Vue.extend 创建的组件构造函数（如 Home）
// 也可以直接使用组件选项对象（如 '/list' 中 component 对应的值）

router.map({
    '/home': {
        component: Home
    },
    '/list': {
        component : {
            template: '<h1>This is the List page</h1>'
        }
    }
})
// router.map({
//     '/home': {
//         component: Home
//     },
//     '/biz': {
//         component : Biz,
//         subRoutes : {
//             '/list' : {
//                 component : {
//                     template : '<h2>This is the business list page</h2>'
//                 }
//             },
//             '/detail' : {
//                 component : {
//                     template : '<h2>This is the business detail page</h2>'
//                 }
//             }
//         }
//     }
// })
// 路由器实例会创建一个 Vue 实例，并且挂载到第二个参数元素选择器匹配的 DOM 上
router.start(App, '#app')