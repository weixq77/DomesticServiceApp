<template>
    <div id="order">
       <!-- 商品展示 -->
    <van-nav-bar
        title="订单确认"
        left-arrow
        @click-left="onClickLeft"
        />
          <van-cell title="服务地址" icon="location-o"  
          :label="address" is-link />
          <van-cell title="订单详情" icon="orders-o"  
          :label="order" is-link />
           <!-- <div>订单信息</div> -->
         <van-cell is-link @click="showPopup" icon="underway-o" label="请选择服务时间">服务时间</van-cell>
            <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '50%' }"
                >
                <van-datetime-picker
                    v-model="currentDate"
                    type="datetime"
                    :min-date="minDate"
                    :max-date="maxDate"
                    />                                  
            </van-popup> 
            <van-collapse v-model="activeNames">
                <van-collapse-item title="支付方式" name="1" label="请选择支付方式" icon="bill-o">
                    <van-radio-group v-model="radio">
                            <van-cell-group>
                                <van-cell title="微信" clickable @click="radio = '1'" icon="wechat">
                                <van-radio slot="right-icon" name="1" />
                                </van-cell>
                                <van-cell title="支付宝" clickable @click="radio = '2'" icon="alipay" >
                                <van-radio slot="right-icon" name="2" />
                                </van-cell>
                                 <van-cell title="银行卡" clickable @click="radio = '3'" icon="card" >
                                <van-radio slot="right-icon" name="3" />
                                </van-cell>
                            </van-cell-group>
                            </van-radio-group> 
                    </van-collapse-item>
            </van-collapse>          
           
        <van-submit-bar
            :price="3050"
            button-text="确认提交"
            @submit="onSubmit"
            />
    </div>
</template>
<script>
export default { 
    
    data(){
        return{
           address:'江苏省昆山市巴城镇学院路浦东软件园',
           order:"订单详情",
           show: false,
            minHour: 10,
            maxHour: 20,
            minDate: new Date(),
            maxDate: new Date(2019, 10, 1),
            currentDate: new Date(),
             radio: '1',
            activeNames: ['1']

        }      
    },
    methods:{
        onClickLeft() {
          this.$router.push("/product")
        },
        onSubmit(){
            alert("提交成功");
             this.$router.push("/order")

        },
        showPopup() {
            this.show = true;
            }
    }
}
</script>
<style scoped>

</style>