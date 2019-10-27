<template>
    <div class="layout">
        <router-view></router-view>
        <van-tabbar v-model="active" @change="tabChangerHandler" >
            <van-tabbar-item name="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item  name="/order" icon="orders-o">订单</van-tabbar-item>
            <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:0
        }
    },
    methods:{
        tabChangerHandler(path){
            this.$router.push({path})
        }
    }
}
</script>