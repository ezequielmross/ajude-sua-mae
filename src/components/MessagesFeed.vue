<template>
  <main v-on:newquestion="askToWatson">
    <span v-for="m in messages" :key="m.from+m.text" :class="m.from">{{m.text}}</span>
  </main>
</template>

<script>
import axios from 'axios'

const requestWatson = (message) => {
  const workspaceId = '67d87e29-15f8-44fc-bbfc-277352a5ea56'

  return axios.post(`https://gateway.watsonplatform.net/conversation/api/v1/workspaces/${workspaceId}/message?version=2017-05-26`, {
    input: {
      text: message
    }
  },
    {
      auth: {
        username: 'a41d3938-f07c-469a-86d3-01f90179c46a',
        password: 'qZ2m1E0Tlc7E'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
}

export default {
  name: 'messages-feed',
  data () {
    return {
      messages: [
        {from: 'watson', text: 'Olá bom dia!'},
        {from: 'mom', text: 'Oi'}
      ]
    }
  },
  methods: {
    askToWatson (message) {
      this.messages.push({from: 'mom', text: message})
      requestWatson(message)
        .then((response) => {
          if (response.data.output.text.length !== 0) {
            this.messages.push({from: 'watson', text: response.data.output.text[0]})
          }
        })
        .catch((error) => {
          console.log(error)
        })
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
