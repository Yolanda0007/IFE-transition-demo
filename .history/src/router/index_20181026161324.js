import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Area from '@/components/Area'
import transform from '@/components/transform'
import hover from '@/components/hover'

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
    },
    {
      path: '/hover',
      name: 'hover',
      component: hover
    }
  ]
})
