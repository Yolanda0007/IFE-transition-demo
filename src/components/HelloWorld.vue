<template>
  <div class="container">
    <p>
      <span class="border" :class="{'active': ifChange}">
        前端学院
      </span>
    </p>
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
  height: rem(50);
  margin: rem(20) auto;
  color: #000000;
  position: relative;
  transition: width cubic-bezier(0, 0, 0.68, 0.8) 0.3s;

  &::after{
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: rem(-5);
    height: rem(5);
    background-color: blue;
    transition: all cubic-bezier(0, 0, 0.68, 0.8) 0.3s;
  }
}
.border.active{
  color: blue;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: rem(5);
  }
}
</style>
