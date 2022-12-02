// 主页token的拦截
// 导航守卫
// 引入roter
import router from "@/router";
import {
  Message
} from 'element-ui'
// 前置守卫 一个参数 回调函数 回调函数三个参数
// to要去的页面
// from 来的页面
// next 跳转的地址
// next (false) 留在原地
import store from '@/store' //store实例
const whitle = ['/login']
// 前置守位
router.beforeEach(async (to, from, next) => {
  // 判断有无token
  if (store.getters.token) {
    console.log(store.getters.token)
    // 有token 如果要去登录页面 那就免登录直接跳转
    if (to.path === '/login') {
      next('/menu')
      Message.success('登录成功');
    } else {
      // 如果用户信息不存在那就获取用户信息
      // 必须有token才可以获取资料
      // 加一个判断 当没有资料就获取资料 然后去页面
      //  去页面
      next()
    }
  } else {
    console.log('没有token')
    // 如果没有token
    //   判断是否去白名单
    if (whitle.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }

})
// 后置守卫
router.afterEach(() => {

})
