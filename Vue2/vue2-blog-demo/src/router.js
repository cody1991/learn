import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const title = 'cody blog'

const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: 'link-active'
  routes
})

// next() // 默认通过路由
// next(false) // 中止导航，那么将会跳回到from的地址
// next({ path: '/' }) // 跟一个路由参数对象，将会中止当前导航并跳往指向的路由

// router.beforeEach和router.afterEach 一个触发于导航开始前，一个触发于导航开始后

// const router = new VueRouter({ ... })

// router.beforeEach((to, from, next) => {
//   console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//   console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//   next(false) // 大哥：谁让你过去的？
//   // 调用next(false)中止导航，于是页面回到跳转前
// })

// router.afterEach((to, from, next) => {
//   console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//   console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//   next() // 大哥：过去吧！
//   // 调用next通过路由
// })
// ``

// 单个路由

// **单个路由独享的钩子**，同样是两个方法`beforeEnter`和`afterEnter`，同样的套路。
// 套路如下：
// ```js
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/demo',
//       component: Demo,
//       beforeEnter: (to, from, next) => {
//         console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//         console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//         next() // 大哥：过去吧！
//         // 调用next通过路由
//       },
//       afterEnter: (to, from, next) => {
//         console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//         console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//         next({ path: '/' }) // 大哥：像那边走！
//         // 调用next({ path: '/' })中止导航，并跳到首页
//       }
//     }
//   ]
// })

// 组建内

// const Demo = {
//   template: `<div>this is a Demo </div>`,
//   beforeRouteEnter (to, from, next) {
//     console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//     console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//     next() // 大哥：过去吧！
//     // 在渲染该组件的对应路由被 confirm 前调用
//     // 不！能！获取组件实例 `this`
//     // 因为当钩子执行前，组件实例还没被创建
//   },
//   beforeRouteLeave (to, from, next) {
//     console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
//     console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
//     next() // 大哥：过去吧！
//     // 导航离开该组件的对应路由时调用
//     // 可以访问组件实例 `this`
//   }
// }

router.beforeEach((to, from, next) => {
  let titleStr = ''

  console.log(to.name)
  console.log(to.matched)

  if (to.name !== 'Home') {
    for (let i = to.matched.length - 1; i >= 0; i--) {
      titleStr += `${to.matched[i].meta.title} - `
    }
  }

  titleStr += title

  document.title = titleStr

  next()
})

export default router
