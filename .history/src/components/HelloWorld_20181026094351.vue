<template>
  <div class="container">
    <div class="border" :class="{'active': ifChange}">
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
@import '../assets/scss/rem.scss';

.change-style{
  border: solid 1px #dedede;
  outline: none;
  font-size: rem(16);
}

.border{
  font-size: rem(28);
  width: rem(200);
  height: rem(50);
  margin: rem(20) auto;
  color: #000000;
  position: relative;

  &::after{
    content: '';

  }
}
</style>
