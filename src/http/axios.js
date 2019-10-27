// 配置axios基础信息(仅限于家政服务后台使用)

// 导入axios和qs
import axios from 'axios';
import qs from 'qs';

// 由于家政服务后台仅接受表单数据，而axios默认请求数据是json，所以需要转换才能将数据保存至数据库
// axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
// 配置基本的请求路径
axios.defaults.baseURL = "http://47.94.36.193:6677";

// 配置一个响应的拦截器
axios.interceptors.response.use(function (response) {
    // 将返回的数据掉二次封装 
    let {data} = response;
    response.data = data.data;//数据
    response.status = data.status;//状态
    response.statusText = data.message;//返回信息
    // 当状态码为500的时候，返回错误
    if(data.status===500){
        return Promise.reject(error);
    }
    return response;
}, function (error) {
    console.log("error",error);
    return Promise.reject(error);
});

// 封装post请求并对请求信息进行处理，发送的数据为查询字符串(适用保存与修改功能)
// key=val&key=val
export function post(url,data){
    return axios({
        method:"post",
        url,
        data:qs.stringify(data),//利用qs将字符串转换
        timeout:10000,//请求超时时间(超过这个时间请求中断)
        headers:{//自定义请求头
            'X-Requested-With' : 'XMLHttpRequest',
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    })
}

// 对post请求信息进行处理，发送的数据为查询字符串(适用批量删除功能)
// ids=1221745&ids=1221742
// {ids:data} 表示key为ids
export function post_array(url,data){
    return axios({
        method:"post",
        url,
        data:qs.stringify({ids:data},{arrayFormat:"repeat"}),//用qs转换为指定格式的字符串
        timeout:10000,
        headers:{
            'X-Requested-With' : 'XMLHttpRequest',
            'Content-Type' : 'application/x-www-form-urlencoded'
        }
    })
}

//提交post请求，发送的数据为json字符串时使用
export function post_json(url,data){
    return axios({
        method:"post",
        url,
        data,
        timeout:10000
    })
}


// get请求获取数据
export function get(url,params){
    return axios({
        method:"get",
        url,
        params,//get请求时带的查询参数，也可以忽略
        timeout:10000,
        headers:{
            'X-Requested-With' : 'XMLHttpRequest',
        }
    })
}