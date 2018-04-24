import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import Product from '@/components/Product'
import Action from '@/components/Action'
import Add from '@/components/action/Add'
import Delete from '@/components/action/Delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/action',
      component: Action,
      children: [
        {
          path: '/delete',
          component: Delete
        },
        {
          path: '/add',
          component: Add
        }
      ]
    }
  ]
})
