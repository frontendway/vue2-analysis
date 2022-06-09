<template>
  <section>
    <h2>input diff 问题</h2>
    <div v-if="isShow">
      <input type="text" @input="inputHandle">inputHandle
    </div>
    <div v-else>
      <input type="text" @change="changeHandle">changeHandle
    </div>
    <button @click="isShow = !isShow">切换</button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  },

  methods: {
    inputHandle () {
      console.log('inputHandle')        
    },
    changeHandle () {
      console.log('changetHandle')      
    }
  }
}
</script>
