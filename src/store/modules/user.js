// 请求三个方法
import {getToken,setToken, removeToken,} from '@/utils/auth'

//  引入网络请求接口
//  import {login, getuesrInfo ,getuseravtant} from '@/api/user.js'
//  import  { resetRouter } from '@/router'
export default {
  // 命名空间
  namespaced: true,
  state: {
    // 从缓存中读取token 初始化读取
    token:getToken(),
  },
  mutations: {
    // vuex数据持久化  
  // 更新token
     uptoken(state,token){
         state.token = token
        //  同步给缓存
        setToken(token)
        console.log(token)
     },
    //  删除token
    removetoken(state){
      
       state.token = null,
      //  移除缓存
       removeToken()
    },
  },
  actions: {
    // 网络请求发起在这里
    getInfo(context,payloader){
      context.commit('uptoken', payloader)  //设置toke
    },
    // 登出
     logout(context){
        context.commit('removetoken')
      // 重置路由
      // resetRouter()
      // 让路由表的数据返回初始静态路由 子模块调用子模块方法
      // 调用加了命名空间的子模块  三个参数  名称,载荷,和一个对象{root:true}
      //  context.commit('permission/changeroutes', [], {root: true})
     }
  }
}
