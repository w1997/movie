import axios from 'axios'
//对axios进行二次封装 
export default function ajax(url,data={},type="GET"){
    if(type==="GET"){
        return axios.get(url,{
            params:data
        })
    }else{
        return axios.post(url,data)
    }
}