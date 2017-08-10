import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/home_page/home_page.vue'
import catFood from '../components/cat_food/cat_food.vue'
import sales from '../components/sales/sales.vue'
import supermarket from '../components/supermarket/supermarket.vue'
import video from '../components/video/video.vue'
import classroom from '../components/classroom/classroom.vue'
import footer from '../components/footer/footer.vue'
import classw from '../components/class/class.vue'
import cart from '../components/cart/cart.vue'
import myepet from '../components/myepet/myepet.vue'
import tab from '../components/tab/tab.vue'
import header from '../components/header/header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home_page'
    },
    {
      path: '/home_page',
      component: homePage
    },
    {
      path: '/cat_food',
      component: catFood
    },
    {
      path: '/sales',
      component: sales
    },
    {
      path: '/supermarket',
      component: supermarket
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/classroom',
      component: classroom
    },
    {
      path: '/footer',
      component: footer
    },
    {
      path: '/tab',
      component: tab
    },
    {
      path: '/classw',
      component: classw
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/myepet',
      component: myepet
    },
    {
      path: '/header',
      component: header
    }

  ]
})
