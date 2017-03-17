var vm=new Vue({
    el :'#app',
    data :{
        productList:[],
        totalMoney:0,
        amount:0
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
            // this.$http.get('data/cart.json',{id:123}).then(function(res){
            //     _this.productList=res.body.result.productList;
            //     _this.totalMoney=res.body.result.totalMoney;
            // })
            // ES6语法
            this.$http.get('data/cart.json',{id:123}).then(res=>{
                _this.productList=res.body.result.productList;
                _this.totalMoney=res.body.result.totalMoney;
            })
        },
        addAmount:function (product,add) {
            product.productQuentity=product.productQuentity+add
            if(product.productQuentity<0)
                product.productQuentity=0
        }
    }
});
// 全局过滤器
Vue.filter('qMoneyFormat',function (value,type) {
    return value.toFixed(2)+type
})