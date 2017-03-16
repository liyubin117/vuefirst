var user=new Vue({
    el:'#Muser',
    data:{
        username:undefined,
        password:undefined,
        enabled:true
    },
    methods:{
        logon:function(){
            if(this.username=='liyubin'&&this.password=='password'){
                alert('登陆成功！')
            }else if(this.username==null||this.password==null){
                alert("请输入用户名或密码！")
            }else{
                alert("用户名或密码错误！")
            }
        },
        register:function(){

        }
    }
})