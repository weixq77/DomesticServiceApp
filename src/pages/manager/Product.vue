<template>
    <div id="product">
       <van-nav-bar 
        title="商品分类" 
        left-arrow
        @click-left="onClickLeft" />
        <div id="left-nav">
            <van-sidebar v-model="activeName">
                <van-sidebar-item title="大衣" nmae="a" >
                </van-sidebar-item>
                <van-sidebar-item title="大衣外套" ></van-sidebar-item>
                <van-sidebar-item title="裤装裙装" ></van-sidebar-item>
                <van-sidebar-item title="配件" ></van-sidebar-item>
            </van-sidebar>
        </div>
        <!-- <van-pagination 
            v-model="currentPage" 
            :total-items="125" 
            :show-page-size="3" 
            force-ellipses
        /> -->
        <div id="message">
            <van-card
                v-for=" item in products"
                :key="item.id"
                :num="item.total"
                :price="item.price"
                :desc="item.description"  
                :title="item.name"
                :thumb="item.photo">
            <van-stepper v-model="value"></van-stepper>
            </van-card>
            <!-- <van-card
                num="1"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card>
            <van-card
                num="1"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card>
            <van-card
                num="1"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card>
            <van-card
                num="1"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card>
            <van-card
                num="1"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card>
                <van-card
                num="1" 
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                <van-stepper v-model="value"></van-stepper>
            </van-card> -->
        </div>
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        />
        <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        />
    </div>
</template>
<script>
import {mapState,mapMatutions,mapGetters,mapActions} from 'vuex'
export default {
    name:'product',
    data() {
      return {
            activeName:'0',//记录当前选中标签页
            value: 0,
      }
    },
    created(){
        this.findAllProducts();
    },
    computed:{
        ...mapState("product",["products"])
    },
    methods:{
        // 查询所有产品
        ...mapActions("product",["findAllProducts"]),
        //跳转订单页面
        onSubmit(){
            this.$router.push("/SubmitOrder")
        },
        // 返回主页
        onClickLeft(){
             this.$router.push("/home")
        }
    }
}
</script>
<style scoped>
#message{
    margin-left: 90px;
}
#left-nav{
    position: absolute;
}
</style>