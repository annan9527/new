const getters = {

  // 快捷访问token
  token: state => state.user.token,
  // // 快捷访问用户信息
  // userInfo : state => state.user.userInfo,
  // companyid : state =>  state.user.userInfo.companyId,
  // // 快捷访问路由
  // routes:state => state.permission.routes
}
export default getters
