<template>
  <div>
    <transition :appear="true" name="fade">
      <p v-if="show">fade</p>
    </transition>
    <button @click="show = !show">toggle</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}

</script>

<style>
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-active{
  transition: height 2s ease 0s, opacity 5s ease 0s, width 8s ease 0s;
}
</style>
