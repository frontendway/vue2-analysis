<template>
  <div>
    <button @click="clickHandle">btn</button>
    {{a}}
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle () {
      console.log('child click')
    }
  }
}
</script>
