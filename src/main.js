import Vue from 'vue'

Vue.config.productionTip = false

// example
/* import Example from './example.vue'
new Vue({
  el: '#app',
  render: c => c(Example)
}) */


// 组件化及生命周期函数执行
/* import App from './learn/App.vue'
new Vue({
  el: '#app',
  render: h => h(App)
}) */


// 合并配置
/* const childComp = {
  template: '<div>{{msg}}</div>',
  created () {
    console.log('child created')
  },
  mounted () {
    console.log('child mounted')
  },
  data () {
    return {
      msg: 'child hello vue'
    }
  }
}
Vue.mixin({
  created () {
    console.log('parent created')
  }
})
new Vue({
  el: '#app',
  render: h => h(childComp)
}) */


// mounted 钩子函数合并到父组件
/* import AppMounted from '@/learn/AppMounted'
new Vue({
  el: '#app',
  mounted () {
    console.log('root mounted')
  },
  render: h => h(AppMounted)
}) */


// 组件注册
/* import App from './learn/App.vue'
Vue.component('app', App)
new Vue({
  el: '#app',
  template: '<app></app>'
}) */


// 异步组件
/* 
.vue 文件中写法
  import Header from '@/header.vue'
  components: {
    Header (resolve) {
      setTimeout(() => resolve(Header), 2000)
  components: {
    Header: () => import('./components/HelloWorld.vue')
*/

/* Vue.component('HelloWorld', function (resolve, reject) {
  require(['./components/HelloWorld.vue'], resolve)
})
new Vue({
  el: '#app',
  render: h => h(App)
}) */

/* Vue.component('HelloWorld', () => import('./components/HelloWorld.vue') )
new Vue({
  el: '#app',
  render: h => h(App)
}) */


// 依赖收集与 cleanupDeps 与循环更新 bug demo
/* import CleanupDeps from './learn/CleanupDeps.vue'
new Vue({
  el: '#app',
  render: c => c(CleanupDeps)
}) */


// Vue.set
/* import VueSet from './learn/VueSet.vue'
new Vue({
  el: '#app',
  render: c => c(VueSet)
}) */


// Computed
/* import Computed from './learn/Computed.vue'
new Vue({
  el: '#app',
  render: c => c(Computed)
}) */


// watcher 实现原理
/* import SimpleWatcher from './learn/SimpleWatcher.vue'
new Vue({
  el: '#app',
  render: c => c(SimpleWatcher)
}) */


// 复杂 Watcher 实现原理
/* import Watcher from './learn/Watcher.vue'
new Vue({
  el: '#app',
  render: c => c(Watcher)
}) */


// 父组件 props 更新触发子组件更新
/* import Update1 from './learn/update1/index.vue'
new Vue({
  el: '#app',
  render: c => c(Update1)
}) */


// 当前组件无子组件 diff 对比
/* import Update2 from './learn/Update2.vue'
new Vue({
  el: '#app',
  render: c => c(Update2)
}) */


// 新旧 vNode key 完全不同 diff 对比
/* import Update3 from './learn/Update3.vue'
new Vue({
  el: '#app',
  render: c => c(Update3)
}) */


// v-for 无 key 删除问题 diff 对比
/* import Update4 from './learn/Update4.vue'
new Vue({
  el: '#app',
  render: c => c(Update4)
}) */


// input 复用
/* import Update5 from './learn/Update5.vue'
new Vue({
  el: '#app',
  render: c => c(Update5)
}) */


// 父组件向子组件传递响应式对象、修改对象中的某个属性值、并不改变其引用地址
// 父组件对比到子组件时、由于是内存地址未修改、子组件 props 被 setter 时、新旧地址一致直接 return
/* import Update6 from './learn/update6'
new Vue({
  el: '#app',
  render: c => c(Update6)
}) */


// 父组件并未访问 name 属性、所以 name 的 dep 并未收集到父组件的渲染 watcher、而子组件访问了 name、所以收集了子组件的渲染 watcher
// 当 name 被修改时、dep 直接通知子组件 watcher 更新、父组件未做任何动作
/* import Update7 from './learn/update7'
new Vue({
  el: '#app',
  render: c => c(Update7)
}) */


// props 的规范化初始化
/* import Props from './learn/props/index.vue'
new Vue({
  el: '#app',
  render: c => c(Props)
}) */


// 测试修改引用类型 props
/* import ChangeProps from './learn/obj-props/index.vue'
new Vue({
  el: '#app',
  render: c => c(ChangeProps)
}) */


// 自定义事件以及原生事件
/* import Event from './learn/event/Index.vue'
new Vue({
  el: '#app',
  render: c => c(Event)
}) */


/* import MoreKey from './learn/MoreKey.vue'
new Vue({
  el: '#app',
  render: c => c(MoreKey)
}) */


/* import VModel from './learn/VModel.vue'
new Vue({
  el: '#app',
  render: c => c(VModel)
}) */


// 普通插槽
/* import Slot from './learn/slot/index.vue'
new Vue({
  el: '#app',
  render: c => c(Slot)
}) */


// 作用域插槽
/* import ScopeSlot from './learn/scope-slot/index.vue'
new Vue({
  el: '#app',
  render: c => c(ScopeSlot)
}) */


// keep-alive 组件
import KeepLearn from './learn/keep-alive/index.vue'
new Vue({
  el: '#app',
  render: c => c(KeepLearn)
})


// transition
/* import Tran from './learn/transition/index.vue'
new Vue({
  el: '#app',
  render: c => c(Tran)
}) */
