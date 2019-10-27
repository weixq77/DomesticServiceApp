<template>
    <div id="order">
        <van-nav-bar title="订单" />
        <van-tabs v-model="activeName" swipeable>
            <van-tab title="全部订单" name="a">
                <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"  
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                    <div slot="bottom">
                        {{未服务}}
                    </div>
                </van-card>
            </van-tab>
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