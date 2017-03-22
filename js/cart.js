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
            this.$http.get('data/cart.json',{id:123}).then(function(res){
                _this.productList=res.body.result.productList;
                _this.totalMoney=res.body.result.totalMoney;
            })
            // ES6语法
            // this.$http.get('data/cart.json',{id:123}).then(res=>{
            //     _this.productList=res.body.result.productList;
            //     _this.totalMoney=res.body.result.totalMoney;
            // })
        },
        addAmount:function (product,add) {
            product.productQuentity=product.productQuentity+add
            if(product.productQuentity<0)
                product.productQuentity=0
        },
        selectedProduct:function (item) {
            // 判断当前对象是否包含某属性。若类型等于undefined，则说明未定义。可以在item里增加checkd字段
            // 用Vue监听不存在的变量的两种方法： 1、全局注册Vue.set(object,key,value)；2、局部注册vm.$set(object,key,value)
            if(typeof item.checked== 'undefined'){
                //全局注册
                Vue.set(item,'checked',true)
                // 局部注册
                // this.$set(item.'checked',true)
            }else{
                item.checked=!item.checked
            }
        }
    }
});
// 全局过滤器
Vue.filter('qMoneyFormat',function (value,type) {
    return value.toFixed(2)+type
})