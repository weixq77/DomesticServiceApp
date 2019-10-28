<template>
    <div class="layout">
        <div class="show">
            <router-view></router-view>
        </div>
        <van-tabbar route>
            <van-tabbar-item
                replace
                to="/home"
                icon="wap-home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/order"
                icon="orders-o">
                订单
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/user"
                icon="user-o">
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
       
    }
}
</script>
<style>
.show{
    padding-bottom: 51px;
}
</style>