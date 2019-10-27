<template>
    <div class="layout">
        <router-view></router-view>
        <!-- <router-link to="/home">首页</router-link>
        <router-link to="/order">订单</router-link>
        <router-link  to="/user">我的</router-link> -->
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