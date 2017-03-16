var Home = Vue.extend({
    template: '#home',
    data: function() {
        return {
            msg: 'Hello, vue router!'
        }
    }
    // data: {
    //     msg: 'Hello, vue router!'
    // }
});

var About = Vue.extend({
    template: '#about'
});

// 创建Router实例
var router = new VueRouter();
// 映射路由
// '/home'是一条路由的key，它表示路径；{component: Home}则表示该条路由映射的组件
router.map({
    '/home': {component: Home},
    '/about': {component: About}
});
// 启动路由。创建一个App实例，并且挂载到#app元素
var App = Vue.extend({});
router.start(App, '#app');