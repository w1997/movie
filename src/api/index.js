//调用ajax中的方法
//解决跨域问题，在package.json文件中配置"proxy":"http://localhost:5000",就可以解决
import ajax from './ajax'

let URL=""
// resLogin(username,pssword)=>ajax(URL+"/login",{username,password},"POST")
 export function resLogin(username,password){
    return ajax(URL+"/login",{username,password},"POST")
}