<template>
  <section>
    <h4>child receive message</h4>
    <span>{{ message }}</span>
  </section>
</template>

<script>
import Child from './child.vue'

export default {
  props: ['message']
}
</script>
