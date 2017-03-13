// 1.创建一个组件构造器
var myComponent = Vue.extend({
    template: '<div>This is my first component!</div>'
});

var myComponent2 = Vue.extend({
    template: '<div>This is my second component!</div>'
});
// 父子组件
var Child = Vue.extend({
    template: '<h3>This is a child component!</h3>'
});

var Parent = Vue.extend({
    // 在Parent组件内使用<child-component>标签
    //必须加<div>标签才行，why?
    template :'<div><h2>This is a Parent component</h2><child-component></child-component></div>',
    components: {
        // 局部注册Child组件，该组件只能在Parent组件内使用
        'child-component': Child
    }
});

// 2.注册组件，并指定组件的标签，组件的HTML标签为<my-component>
//全局注册
Vue.component('my-component', myComponent);

var app1 = new Vue({
    el: '#app1'
});

var app2 = new Vue({
    el: '#app2'
});

var app3 = new Vue({
    el:'#app3',
//        局部注册，用components属性
    components:{
        'my-component2':myComponent2
    }
});

var app4 = new Vue({
    el: '#app4',
    components:{
        'parent-component': Parent
    }
});
// 注册语法糖
var app5 = new Vue({
    el: '#app5',
    components: {
        // 局部注册，my-component2是标签名称
        'my-component3': {
            template: '<div>This is the third component!</div>'
        },
        // 局部注册，my-component3是标签名称
        'my-component4': {
            template: '<div>This is the fourth component!</div>'
        }
    }
});
// <script>标签解耦html和js
var app6 = new Vue({
    el : '#app6',
    template : '#div6',
    components : {
        'my-component5' : '#div6'
    }
});
// props属性，把数据传给子组件
var app7 = new Vue({
    el: '#app7',
    data: {
        name: 'keepfool',
        age: 28
    },
    components: {
        'my-component': {
            template: '#myComponent',
            props: ['myName', 'myAge']
        }
    }
})