/**
 * Created by administrator on 2017/3/8.
 */
//声明式渲染
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        a:1
    },
    // 用到了生命周期，在对象创建后自动调用
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
});
// 绑定 DOM 元素属性
// v-bind：将这个元素节点的 title 属性和 Vue 实例的 message 属性绑定到一起。
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});
// v-if 控制显示
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});
// v-for 指令可以绑定数据到数组来渲染一个列表
//在浏览器控制台输入 app4.todos.push({ text: 'New item' })，增加一行
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});
// v-on 绑定一个监听事件用于调用我们 Vue 实例中定义的方法
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
// v-model 在表单输入和应用状态中做双向数据绑定
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
// Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        msg: 'Hello Vue! once!'
    }
});
var app8=new Vue({
    el:'#app-8',
    data:{
        rawHtml:"<h1>新增h1元素</h1>"
    }
});