var vm=new Vue({
    el :'#app',
    data :{
        titile: 'Hello Vue'
    },
    // 局部过滤器
    filters:{

    },
    // 相当于入口方法
    mounted:function () {
        this.cartView();
    },
    methods:{
        // 查询商品信息
        cartView:function(){
            this.title='hello';
        }
    }
});