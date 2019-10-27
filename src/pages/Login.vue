<template>
    <div class="login">
        <div id="content">
        <h3>家政服务平台</h3>
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
         margin-right: -150px;
         margin-top: -150px;
         text-align: center; 
      }
      h3{
          color: skyblue;
      }
</style>