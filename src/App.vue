<template>
  <div id="app">
    <top-bar></top-bar>
    <messages-feed></messages-feed>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import MessagesFeed from '@/components/MessagesFeed.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name: 'app',
  components: { TopBar, MessagesFeed, FooterBar }
}
</script>

<style lang="stylus">
*
  box-sizing border-box
body
  margin: 0
  height: 100vh

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  height: 100%
  display flex
  flex-flow column

/* Layout Pattern */
.row, .column
  display: flex;
  justify-content: space-around
.row
  flex-flow: row nowrap
.column
  flex-flow: column nowrap
.row > *, .column > *
  flex-grow: 0
  margin-left: 0
  margin-right: 0
</style>
