<template>
  <section>
    <h2>父组件：{{ message }}</h2>
    <child :message="message" />
    <button @click="setName">切换</button>
  </section>
</template>

<script>
import Child from './child.vue'

export default {
  components: {
    Child
  },

  data () {
    return {
      message: { name: 'rose' }
    }
  },

  methods: {
    setName () {
      this.message.name = 'joke'
    }
  }
}
</script>
