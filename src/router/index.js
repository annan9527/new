import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    // 登录页面
    {
      path: '/login',
      component: () => import('../views/login/index.vue'),
    },
    // 登录菜单页面
    {
      path: '/menu',
      component: () => import('../views/LoginMeun/index.vue'),
    },
    // 智慧交通
    {
      path: '/smart',
      component: () => import('../views/MenuLink/Smart.vue'),

    },
    // 警情打标
    {
      path: '/marking',
      component: () => import('../views/MenuLink/MarkiNg.vue'),

    },
    {
      path: '/',
      component: () => import('../layout/index.vue'),
      children: [{
          path: '/',
          component: () => import('../views/home/index.vue'),
        },
        // 情指勤舆
        {
          path: '/alerttrends',
          component: () => import('../views/rigth_top/AlertTrends.vue'),
        },
        //安全态势 
        {
          path: '/safe',
          component: () => import('../views/left_top/Safe.vue'),
        },
        // 秩序管理
        {
          path: '/order',
          component: () => import('../views/left_bottom/Order.vue'),
        },
        // 服务保障
        {
          path: '/serve',
          component: () => import('../views/rigth_bottom/Serve.vue'),
        },
        // 人
        {
          path: '/people',
          component: () => import('../views/People/people.vue'),
        },
        // 车
        {
          path: '/car',
          component: () => import('../views/Car/car.vue'),
        },
        // 路·

        {
          path: '/road',
          component: () => import('../views/Road/road.vue'),
        },
        // 企·

        {
          path: '/company',
          component: () => import('../views/Company/company.vue'),
        },
        // 事·

        {
          path: '/event',
          component: () => import('../views/Event/event.vue'),
        },
      ]
    }
  ],
  scrollBehavior: () => ({
    y: 0
  }),
  // mode: 'history'
})
