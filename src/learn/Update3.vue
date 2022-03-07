<template>
  <section>
    <ul :key="arrs[0]">
      <li v-for="i in 2" :key="i">{{ i }}</li>
    </ul>
    <ul :key="arrs[1]">
      <li v-for="i in 'ab'" :key="i">{{ i }}</li>
    </ul>
    <button @click="reverse">reverse</button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      arrs: ['a', 'b']
    }
  },

  methods: {
    reverse () {
      this.arrs.reverse()
    }
  }
}
</script>
