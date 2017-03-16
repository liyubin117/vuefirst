var vm=new Vue({
    el :'#app',
    data :{
        productList:[],
        totalMoney:0
    },
    // 局部过滤器
    filters:{
        formatMoney:function (value) {
            return "￥"+value.toFixed(2);
        }
    },
    // 相当于入口方法
    mounted:function () {
        this.cartView();
    },
    methods:{
        // 查询商品信息
        cartView:function(){
            var _this=this;
            this.$http.get('data/cart.json',{id:123}).then(function(res){
                _this.productList=res.body.result.productList;
                _this.totalMoney=res.body.result.totalMoney;
            })
        }
    }
});