<template>
  <footer>
    <input-search></input-search>
  </footer>
</template>

<script>
import InputSearch from '@/components/InputSearch.vue'

export default {
  name: 'footer-bar',
  components: { InputSearch }
}
</script>

<style lang="stylus" scoped>
footer
  display: flex
  margin: 0
  height: 40px
  width: 100%
  background-color: #4fc08d
  color: #ffffff
  position: absolute
  left: 0
  bottom: 0
</style>
