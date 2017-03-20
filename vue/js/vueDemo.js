/**
 * Created by administrator on 2017/3/8.
 */
//声明式渲染
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        a: 1
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
    el: this.id,
    data: {
        message: 'You loaded this page on ' + new Date(),
        id: 'app-2'
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
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
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
var app8 = new Vue({
    el: '#app-8',
    data: {
        rawHtml: "<h1>新增h1元素</h1>"
    }
});
var app9 = new Vue({
    el: '#app-9',
    data: {
        yes: true,
        no: false,
        age: 28,
        name: 'keepfool'
    }
});
var app10 = new Vue({
    el: '#app-10',
    data: {
        yes: true,
        no: false,
        age: 28,
        name: 'keepfool'
    }
});
var app11 = new Vue({
    el: '#app-11',
    data: {
        age: 28,
        name: 'keepfool',
        sex: 'Male'
    }
});
var app12 = new Vue({
    el: '#app-12',
    data: {
        people: [{
            name: 'Jack',
            age: 30,
            sex: 'Male'
        }, {
            name: 'Bill',
            age: 26,
            sex: 'Male'
        }, {
            name: 'Tracy',
            age: 22,
            sex: 'Female'
        }, {
            name: 'Chris',
            age: 36,
            sex: 'Male'
        }]
    }
});
var app13 = new Vue({
    el: '#app-13',
    data: {
        activeNumber: 1,
        pageCount: 10
    }
});
var app14 = new Vue({
    el: "#app-14",
    data: {
        message: "hello liyubin!"
    },
    methods: {
        say: function (msg) {
            alert(msg)
        },
        hi: function () {
            alert(this.message)
        }
    }
});

var app15 = new Vue({
    el: '#app-15',
    data: {
        message: 'Hello',
        firstName: 'li',
        lastName: 'yubin',
        newName: 'li handsom'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        getFullName: function () {
            return this.firstName + " " + this.lastName
        },
        setFullName: function (newName) {
            var names = newName.split(" ")
            this.firstName = names[0]
            this.lastName = names[2]
        }
    }
});

var app16=new Vue({
    el : '#app-16',
    data: {
        message : '',
        gender : 'male',
        checked : '',
        multiChecked : [],
        selected : 'A',
        multiSelected : [],
        a:'已选中',
        b:'未选中'
    }
});


// watch属性的使用
var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 question 发生改变，这个函数就会运行
        question: function (newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
        // ajax请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle), 参考: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
            function () {
                var vm = this
                if (this.question.indexOf('?') === -1) {
                    vm.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                vm.answer = 'Thinking...'
                axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
                    })
            },
            // 这是我们为用户停止输入等待的毫秒数
            500
        )
    }
})