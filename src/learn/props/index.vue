<template>
  <div id="app">
    <div>{{ msg }}</div>
    <hr />
    <Compa :msg="msg" />
    <Compb age="20" />
    <!-- <Compc mess-age="mess-age" /> -->
    <Compc mess-age />
    <button @click="change">change</button>
  </div>
</template>

<script>
import Compa from './Compa.vue'
import Compb from './Compb.vue'
import Compc from './Compc.vue'

export default {
  name: 'props',
  data () {
    return {
      msg: {
        a: 1,
        b: 2
      }
    }
  },
  components: {
    Compa,
    Compb,
    Compc
  },
  methods: {
    change () {
      // case 1
      this.msg.a = 2

      // case 2
      this.msg = {
        c: 1,
        d: 2
      }
    }
  }
}
</script>
