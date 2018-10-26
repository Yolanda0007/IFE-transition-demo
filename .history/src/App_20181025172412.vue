<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    rem () {
      var html = document.documentElement
      var width = Math.min(html.getBoundingClientRect().width, 500)
      var fontSize = width * 100 / 750 + 'px'
      html.style.fontSize = fontSize
    }
  },
  beforeMount () {
    this.rem()
    window.onresize = function () { rem() }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
