// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
// 引入全局css
import './assets/style/style.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(dataV)
Vue.config.productionTip = false
import 'echarts'
import 'echarts-gl'
// 图片放大全局

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
// 路由守卫
import './permission' // permission control

// 地图
import AmapVue from '@amap/amap-vue';
AmapVue.config.version = '2.0'; // 默认2.0，这里可以不修改
AmapVue.config.key = '2ad99f5c182a9a38bbc71aa8764fd839';
AmapVue.config.plugins = [
  'AMap.Autocomplete',
  'AMap.PlaceSearch',
  'AMap.Scale',
  'AMap.OverView',
  'AMap.ToolBar',
  'AMap.MapType',
  'AMap.PolyEditor',
  "AMaP-PolyLine",
  'AMap.CircleEditor',
  'AMap.Geocoder',
  'AMap.MarkerClusterer',
  "Amap.Polygon"
  // 在此配置你需要预加载的插件，如果不配置，在使用到的时候会自动异步加载
];
Vue.use(AmapVue);
// import echartsGL from 'echarts-gl'
// Vue.prototype.$echartsGL = echartsGL // 引入组件（将echarts注册为全局）
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
