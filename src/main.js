import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI)

Vue.config.devtools = true
Vue.config.productionTip = true

router.beforeEach((to, from, next) => {
  document.title = to.name
  if (to.path === '/login') {
    next()
  } else if (!store.state.isLogin) {
    next({ path: '/login' })
  } else if (to.path === '/logout') {
    vm.$confirm('确认退出登录?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      next({ path: '/login' })
      store.commit('clearUserInfo')
    }).catch(() => {

    })
  } else {
    next()
  }
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
