<template>
  <div class="row">
    <input type="text" v-model="text" @keyup.enter="send" />
    <svg @click="send" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  </div>
</svg>
</template>
<script>
export default {
  name: 'input-search',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    send () {
      this.$emitAll('newquestion', this.text)
      this.text = ''
    }
  }
}
</script>
<style lang="stylus" scoped>
  div
    width: 100%
    height: 100%
    align-self: center
    align-items: center
  input
    width: 80%
    border: none
    height: 30px
    padding-left: 10px
</style>
