<template>
  <ul>
    <li v-for="(item, idx) of arrs" :key="idx" @click="remove(idx)">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      arrs: ['a', 'b', 'c', 'd']
    }
  },

  methods: {
    remove (idx) {
      this.arrs.splice(idx, 1)
    }
  }
}
</script>
