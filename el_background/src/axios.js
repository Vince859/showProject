import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import { Promise } from 'core-js'

axios.defaults.baseURL = 'http://localhost:4000/api'

const request = axios.create({
    timeout : 5000,
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
})

request.interceptors.request.use(config => {
    config.headers['authorization'] = localStorage.getItem('token')
    return config
})

request.interceptors.response.use(response => {

    let res = response.data

    if (res.status === 1) {
        return response
    } else {
        ElementUI.Message.error(!res.msg ? '系统异常！' : res.msg)
        return Promise.reject(response.data.msg)
    }
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

export default request