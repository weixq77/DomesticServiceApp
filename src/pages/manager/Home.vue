<template>
    <div class="home">
        <van-nav-bar
            title="首页"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <!-- 顶部轮播图 -->
        <van-row> 
            <van-swipe :autoplay="3000" indicator-color="white" >
                <van-swipe-item ><img src="./images/首页1.jpg" height="170px"></van-swipe-item>
                <van-swipe-item><img src="./images/首页2.jpg" height="170px"></van-swipe-item>
                <van-swipe-item><img src="./images/首页3.jpg" height="170px"></van-swipe-item>
                <van-swipe-item><img src="./images/首页4.jpg" height="170px"></van-swipe-item>
            </van-swipe>
        </van-row>
       <div>
            <!-- 栏目图片导航 -->
        <van-grid :column-num="3" >
            <van-grid-item
                v-for="c in categories.slice(0,5)"
                :key="c.id"
                :icon="c.icon"
                :text="c.name"
                @click="openCategory"
            />
            <van-grid-item>
                <img src="./images/栏目.png" />
            </van-grid-item>
        </van-grid>
       </div>

        <div>
            <!-- {{products}} -->
            <!-- 产品图片导航 -->
        <van-grid :column-num="2" >
            <van-grid-item
                v-for="p in products.slice(0,5)"
                :key="p.id"
                :icon="p.photo"
                :text="p.name"
                :value="p.id"
                @click="openProduct($event)"
            />
        </van-grid>
        </div>

    </div>
</template>
<script>
// import {Swipe,SwipeItem} from 'vant';
import {mapState,mapMatutions,mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    created(){
        this.findAllCategories();
        this.findAllProducts();
    },
    computed:{
        ...mapState("category",["categories"]),
        ...mapState("product",["products"])
    },
    methods:{
        ...mapActions("category",["findAllCategories"]),
        ...mapActions("product",["findAllProducts"]),
        onClickLeft() {
        this.$router.push("Login")
        },
        openCategory($event){
            console.log($event)
            // 遍历点击获取值
            // 判断获取值
            // 对应跳转页面
            this.$router.push("/product")
        },
        openProduct(){
            // 遍历点击获取值
            // 判断获取值
            // 对应跳转页面
            alert("待完善。。。")

        }
    }
}
</script>
<style scoped>
img{
    width: 100%;
}
</style>