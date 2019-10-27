<template>
    <div class="login">
         <van-nav-bar
            title="登录页面"
            />
        <div id="content">
        <h1>家政服务平台</h1>
        <van-cell-group>
            <van-field
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
            />

            <van-field
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            </van-cell-group>
            <br>
            <van-button type="info" size="small" @click="sumbitHandler">登录</van-button>
            &nbsp;
            <van-button type="primary"  size="small">注册</van-button>
                </div>
            </div>
</template>
<script>
export default {
    methods:{
            sumbitHandler(){
                this.$router.push("/home")
            }
    }
}
</script>
<style scoped>
      #content{
         position: absolute;
         top: 50%;
         right: 50%;
         margin-right: -165px;
         margin-top: -170px;
         text-align: center; 
         background-color: whitesmoke;
         border-radius: 10px;
         padding: 20px;
      }
      h1{
          color: skyblue;
      }
</style>