<template>
    <div class="home">
        <van-nav-bar
            title="首页"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
            <van-row>
                <img src="./images/home.jpg">
            </van-row>
            <van-grid :column-num="3">
                <van-grid-item
                    v-for="value in 6"
                    :key="value"
                    icon="photo-o"
                    text="文字"
                />
            </van-grid>

    </div>
</template>
<script>
export default {
    methods:{
    onClickLeft() {
     this.$router.push("Login")
    }
    }
}
</script>
<style scoped>
img{
    width: 100%;
}
</style>