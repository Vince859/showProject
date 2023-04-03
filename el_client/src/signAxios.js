import axios1 from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import { Promise } from 'core-js'

axios1.defaults.baseURL = 'http://localhost:4000/api'

const request1 = axios1.create({
    timeout : 5000,
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',   
    },
    responseType:'blob'
})

request1.interceptors.request.use(config => {
    config.headers['authorization'] = localStorage.getItem('token')
    return config
})

request1.interceptors.response.use(response => {

    let res = response.data
    //console.log(1234,res);

    if (response.config.responseType !== 'blob') {
        if (res.code !== 0) {
            ElementUI.Message.error(!res.msg ? '系统异常！' : res.msg)
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return response
        }
    }
    return response
},error => {
    if (error.response.data) {
        error.message = error.response.data.msg
    }
    if (error.response.status === 401) {
        router.push('/login')
    }
    ElementUI.Message.error(error.message,{duration:3000})
    return Promise.reject(error)
})

export default request1