var List = Vue.extend({
    route : {
// vue-router 中的 data 钩子函数，
        data : function(transition) {
// 运行这段代码需要在服务器环境中，即 localhost 下，直接访问文件运行这段代码会抛出异常
            this.$http
                .get('/api/list?pageNo=' + transition.to.params.page)
                // .get('/data/account.json')
            .then(function(rep){
// 成功回调函数
                transition.next({
                    list : rep.data
                });
            }, function(rep) {
// 失败回调函数
                transition.next({
                    data : rep.data
                });
            });
        }
    },
    template: '<h1>This is the list page</h1>'
})