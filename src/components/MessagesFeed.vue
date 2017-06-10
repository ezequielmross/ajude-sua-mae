<template>
  <main v-on:newquestion="askToWatson">
    <span v-for="m in messages" :key="m.from+m.text" :class="m.from">{{m.text}}</span>
  </main>
</template>

<script>
export default {
  name: 'messages-feed',
  data () {
    return {
      messages: [
        { from: 'watson', text: 'Olá bom dia!' },
        { from: 'mom', text: 'Oi' }
      ]
    }
  },
  methods: {
    askToWatson (message) {
      this.messages.push(message)
    }
  }
}
</script>

<style lang="stylus" scoped>
  main
    background: url('../assets/logo.png') no-repeat center
    min-height: calc(100vh - 56px - 40px)
    margin-top: 20px

  .mom, .watson
    margin: 10px
    padding: 8px
    border-radius: 5px
    word-wrap: break-word
  .mom
    background-color: pink
    float: right
  .watson
    background-color: #4fc08d
</style>
