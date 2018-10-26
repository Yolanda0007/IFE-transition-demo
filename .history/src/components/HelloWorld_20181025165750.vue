<template>
  <div class="container">
    <div class="border" :class="{'blue': ifChange}">
      前端学院
    </div>
    <button class="change-style" @click="changeStyle">
      切换样式
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ifChange: false
    }
  },
  methods: {
    changeStyle () {
      if (this.ifChange) {
        this.ifChange = false
      } else {
        this.ifChange = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.change-style{
  border: solid 1px #dedede;
  outline: none;
  font-size: 16px;
}

.border{
  width: 100px;
  height: 100px;
  margin: 20px auto;
  color: #000000;
  border-bottom: solid 5px #fff;
  transition: all 2s;
}
.blue{
  color: blue;
  border-bottom: solid 5px blue;
}
</style>
