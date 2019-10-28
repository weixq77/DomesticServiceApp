<template>
    <div id="product">
       <van-nav-bar title="商品分类" />
        <van-sidebar v-model="activeName">
            <van-sidebar-item title="大衣" >
                <van-card
                    num="1"
                    price="2.00"
                    desc="描述信息"  
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                    <van-stepper v-model="value"></van-stepper>
                </van-card>
            </van-sidebar-item>
            <van-sidebar-item title="大衣外套" ></van-sidebar-item>
            <van-sidebar-item title="裤装裙装" ></van-sidebar-item>
            <van-sidebar-item title="配件" ></van-sidebar-item>
        </van-sidebar>
        <!-- <van-pagination 
            v-model="currentPage" 
            :total-items="125" 
            :show-page-size="3" 
            force-ellipses
        /> -->
        <van-submit-bar
                :price="3050"
                button-text="提交订单"
                @submit="onSubmit"
                />
    </div>
</template>
<script>
export default {
    name:'product',
    data() {
      return {
            activeName:'a',//记录当前选中标签页
            value: 1,
      }
    },
    methods:{
        onSubmit(){
            this.$router.push("/SubmitOrder")
        }
    }
}
</script>
<style scoped>

</style>