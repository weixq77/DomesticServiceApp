<template>
    <div id="order">
        <van-nav-bar title="订单" />
        <van-tabs v-model="activeName" swipeable>
            <van-tab title="全部订单" name="a">全部订单</van-tab>
            <van-tab title="待付款" name="b">待付款</van-tab>
            <van-tab title="待服务" name="c">待服务</van-tab>
            <van-tab title="待评价" name="d">待评价</van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    name:'order',
    data() {
        return {
            activeName:'a',//记录当前选中标签页
        }
    }
}
</script>
<style scoped>

</style>