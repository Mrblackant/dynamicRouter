import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var constantRouterMap=[]

// export const constantRouterMap = [
//   {
//     path: '',
//     component: Layout,
//     redirect: 'dashboard',
//     children: [{
//       path: 'dashboard',
//       component: _import('dashboard/index'),
//       meta: { title: '首页', icon: 'dashboard'}
//     }]
//   },

//   {
//     path: '/example',
//     component: Layout,
//     redirect: '/example/table',
//     name: 'Example',
//     meta: { title: '案例', icon: 'example' },
//     children: [
//       {
//         path: 'table',
//         name: 'Table',
//       component: _import('table/index'),

//         meta: { title: '表格', icon: 'table' }
//       },
//       {
//         path: 'tree',
//         name: 'Tree',
//       component: _import('tree/index'),

//         meta: { title: '树形菜单', icon: 'tree' }
//       }
//     ]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//       component: _import('form/index'),
//         meta: { title: '表单', icon: 'form' }
//       }
//     ]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]


export default new Router({
  routes: constantRouterMap
 
})
