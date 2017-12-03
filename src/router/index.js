import Vue from 'vue'
import Router from 'vue-router'

import Recommend from '../components/recommend/recommend.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import Tab from '../components/tab/tab.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer
    }, {
      path: '/tab',
      name: 'tab',
      component: Tab
    }
  ]
})
