<template>
    <div class="user">
         <van-nav-bar
            title="个人页面"
            />
        <div id="header">     
            <van-image
                round
                width="6rem"
                height="6rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
             <div id="name">你好,{{name}}</div>         
        </div>
         
        <div id="box">
              </div>
        <div id="message">
            <van-row>
                    <van-col span="8">账户余额：</van-col>
                    <van-col span="8"><h3>￥888</h3></van-col>
                    <van-col span="8"><h3>充值</h3></van-col>
                    </van-row>
         </div>
        <van-cell is-link><van-icon name="location-o" />&nbsp;常用地址</van-cell>
        <van-cell is-link @click="showPopup"><van-icon name="phone-o" />&nbsp;联系我们</van-cell>
          
        <van-popup
                v-model="show"
                closeable
                close-icon="close"
                position="bottom"
                :style="{ height: '20%' }"
                >
                <h2>0471-1234-888</h2>
                </van-popup> 
    </div>
</template>
<script>
export default {
       data(){
           return{
               name:"张三",
              show: false
           }
       },
       methods:{
        showPopup() {
            this.show = true;
            }
       }
}
</script>
<style scoped>
       #header{
           position: absolute;
           right: 50%;
           margin-right: -3rem;
           margin-top: 30px;
           text-align: center;
       }
       #name{
           padding: 5px;
           border:1px solid #ccc;
           border-radius: 3px;
           margin-bottom: 10px;
       }
       #box{
           background-color:#ededed;
           height: 200px;
       }
       #message{
           text-align: center;
           padding: 15px;
       }
       h3{
          color:orangered;
          padding: 0;
          margin: 0;
       }

      
       
</style>