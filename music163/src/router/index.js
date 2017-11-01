import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'//头部
import index from '@/components/index'//首页、推荐音乐
import hot from '@/components/hot'//热歌榜
import seach from '@/components/seach'//搜索
import detailed from '@/components/detailed'//搜索详细页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
