import Cookies from 'js-cookie'

const TokenKey = 'token'
// 设置唯一的杜独一无二的key、

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// // 设置唯一的独一无二的时间戳key、
// const Tokentime = 'heimatime'
// // 设置时间戳
// export function setTime(time){
//      return Cookies.set(Tokentime,time)
// }

// // 读取时间戳

// export function gettime(){
//    return Cookies.get(Tokentime)
// }