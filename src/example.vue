<template>
  <div>
    {{ msg }}
    <button @click="addB">add b attribute</button>
    <button @click="setB">set b</button>
    <hr />
    <ul>
      <li v-for="(item, idx) in arrs" :key="idx">{{ item }}</li>
    </ul>
    <button @click="changeArrs">change arrs</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      msg: { a: 1 },
      arrs: ['a', 'b', 'c']
    }
  },
  created () {
    console.log(this.arrs)
  },
  methods: {
    addB () {
      Vue.set(this.msg, 'b', 2)
      // this.msg.b = 2
    },
    setB () {
      this.msg.b = 3
    },
    changeArrs () {
      // Vue.set(this.arrs, 1, 'd')

      // this.arrs[0] = 'd'
      // this.arrs.length = 0
      // this.arrs.__ob__.dep.notify()
    }
  }
}
</script>
