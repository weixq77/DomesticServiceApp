<template>
    <div id="order">
        
        <div class="orderTab">
            <van-nav-bar title="订单" fixed/>
        </div>
            
        <van-tabs v-model="activeName" swipeable :offset-top="46" sticky>
            <van-tab title="全部订单" name="a">
                <div v-if="orders!=''">
                    <van-card
                        v-for=" item in orders"
                        :key="item.id"
                        :num="item.total"
                        price="2.00"
                        desc="描述信息"  
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                        <div slot="bottom" style="margin-top:5px;">
                            <van-row>
                                <van-col span="8"> {{item.status}}</van-col>
                                <van-col span="5"></van-col>
                                <van-col span="11" style="text-align: right;">{{timestampToTime(item.orderTime)}}</van-col>
                            </van-row>
                            
                        </div>
                    </van-card>
                </div>
                <div v-else style="width:100%;">
                    <img src="./images/tips2.jpg">
                </div>
                
            </van-tab>
            <van-tab title="待付款" name="b">
                <div v-if="orderStatusFilter('待付款')!=''">
                    <van-card
                        v-for=" item in orderStatusFilter('待付款')"
                        :key="item.id"
                        :num="item.total"
                        price="2.00"
                        desc="描述信息"  
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                        <div slot="bottom" style="margin-top:5px;">
                            <van-row>
                                <van-col span="8"> {{item.status}}</van-col>
                                <van-col span="5"></van-col>
                                <van-col span="11" style="text-align: right;">{{timestampToTime(item.orderTime)}}</van-col>
                            </van-row>
                            
                        </div>
                    </van-card>
                </div>
                <div v-else style="width:100%;">
                    <img src="./images/tips2.jpg">
                </div>
                
            </van-tab>
            <van-tab title="待服务" name="c">
                <div v-if="orderStatusFilter('未服务')!=''">
                     <van-card
                        v-for=" item in orderStatusFilter('未服务')"
                        :key="item.id"
                        :num="item.total"
                        price="2.00"
                        desc="描述信息"  
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                        <div slot="bottom" style="margin-top:5px;">
                            <van-row>
                                <van-col span="8" id="status"> {{item.status}}</van-col>
                                <van-col span="5"></van-col>
                                <van-col span="11" style="text-align: right;">{{timestampToTime(item.orderTime)}}</van-col>
                            </van-row>
                            
                        </div>
                    </van-card>
                </div>
               <div v-else style="width:100%;">
                    <img src="./images/tips2.jpg">
                </div>
               
            </van-tab>
            <van-tab title="待评价" name="d">
                <div v-if="orderStatusFilter('待评价')!=''">
                    <van-card
                        v-for=" item in orderStatusFilter('待评价')"
                        :key="item.id"
                        :num="item.total"
                        price="2.00"
                        desc="描述信息"  
                        title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
                        <div slot="bottom" style="margin-top:5px;">
                            <van-row>
                                <van-col span="8" id="status"> {{item.status}}</van-col>
                                <van-col span="5"></van-col>
                                <van-col span="11" style="text-align: right;">{{timestampToTime(item.orderTime)}}</van-col>
                            </van-row>
                            
                        </div>
                    </van-card>
                </div>
                <div v-else style="width:100%;">
                    <img src="./images/tips2.jpg">
                </div>
                
            </van-tab>
        </van-tabs>
            <!-- {{orders}} -->

        
        
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    name:'order',
    data() {
        return {
            activeName:'a',//记录当前选中标签页
        }
    },
    created(){
        this.loadData();
    },
    computed:{
        // 顾客的全部订单
        ...mapState("order",["orders"]),
        // 顾客id
        ...mapState("customer",["customerId"]),
        // 指定状态的订单
        ...mapGetters("order",["orderStatusFilter"])
    },
    methods:{
        // 查询顾客的所有订单的请求
        ...mapActions("order",["loadCustomerOrderData"]),
        // 普通方法
        // fun:加载数据
        loadData(){
            this.loadCustomerOrderData(this.customerId);
        },
        // 时间转换
        timestampToTime(datetime){
            // let datetime = row.orderTime;
                if(datetime){
                    datetime = new Date(datetime);
                    let y = datetime.getFullYear() + '-';
                    let mon = datetime.getMonth()+1 + '-';
                    let d = datetime.getDate() + ' ';
                    let h = datetime.getHours() + ':'
                    let m = datetime.getMinutes() + ':'
                    let s = datetime.getSeconds()
                    return y + mon + d + h + m + s;
                }
                return '';
        }


    }
}
</script>
<style scoped>
.orderTab{
    height: 50px;
    
}
#status{
    color: orangered;
    font-weight: bold;
}
</style>