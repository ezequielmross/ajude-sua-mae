<template>
  <main ref="main">
    <div v-for="m in messages" :key="m.from+m.text" :class="m.from + '-div'">
      <div :class="m.from">{{m.text}}</div>
    </div>
  </main>
</template>

<script>
import watson from '../api/Watson.js'

export default {
  name: 'messages-feed',
  data () {
    return {
      messages: [
        {from: 'watson', text: 'Olá, faça sua pergunta!'}
      ]
    }
  },
  methods: {
    askToWatson (message) {
      this.messages.push({from: 'mom', text: message})
      watson.sendMessage(message)
        .then((response) => {
          if (response.data.output.text.length !== 0) {
            this.messages.push({from: 'watson', text: response.data.output.text[0]})
          }
        })
        .catch((error) => {
          console.log(error)
        })
        .then(() => this.scrollToBottom())
    },
    scrollToBottom () {
      this.$refs.main.scrollTop = this.$refs.main.scrollHeight
    }
  },
  created () {
    this.$onAll('newquestion', message => {
      this.askToWatson(message)
    })
  }
}
</script>

<style lang="stylus" scoped>
  main
    background url('../assets/logo.png') no-repeat center
    margin-top 20px
    overflow-y: scroll
    flex 3
  .mom-div
    text-align right

  .mom, .watson
    margin 10px
    padding 8px
    border-radius 5px
    word-wrap break-word
    display inline-block
  .mom
    background-color pink
  .watson
    background-color #4fc08d
</style>
