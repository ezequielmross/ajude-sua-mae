<template>
  <main>
    <div v-for="m in messages" :key="m.from+m.text" :class="m.from + '-div'">
      <span :class="m.from">{{m.text}}</span>
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
        {from: 'watson', text: 'Olá, faça sua pergunta!'},
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
    min-height calc(100vh - 56px - 40px)
    margin-top 20px
  main > div
    margin-bottom 20px
  .mom-div
    text-align right

  .mom, .watson
    margin 10px
    padding 8px
    border-radius 5px
    word-wrap break-word
  .mom
    background-color pink
  .watson
    background-color #4fc08d
</style>
