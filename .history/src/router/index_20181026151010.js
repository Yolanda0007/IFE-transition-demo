import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Area from '@/components/Area'
import transform from '@/components/transform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/area',
      name: 'Area',
      component: Area
    },
    {
      path: '/transform',
      name: 'transform',
      component: transform
    }
  ]
})
