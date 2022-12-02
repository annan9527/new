// // 路由权限管理页面  Vuex管理
// // 导入静态路由 谁都可以访问的路由
// import {
//   constantRoutes,
//   asyncRoutes //动态路由列表
// } from '@/router'

// const state = {
//   // 默认所有人都可以访问静态路由
//   routes: constantRoutes
// }
// const mutations = {
//   // 在这里添加改变静态路由的规则
//   changeroutes(state, newroutes) {
//     //  新路由规则等于 默认路由规则加上新的动态路由规则
//     state.routes = [...constantRoutes, ...newroutes]
//   }

// }
// const actions = {
//   // 新的动态路由规则来自用户的信息里携带的数据
//   filterRoutes(context, menus) {

//     const arr = []
//     menus.forEach((key) => {
//       arr.push(...asyncRoutes.filter((item) => {
//         return item.name === key
//       }))
//     })

//     context.commit('changeroutes', arr)
//     console.log(arr)
//     return arr
//   }
// }
// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }
