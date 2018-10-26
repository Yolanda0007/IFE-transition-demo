<template>
  <div class="container">
    <div class="border" :class="{'blue': ifChange}">
      前端学院
      <div class="trans-div" :class="{'trans-active': ifChange}">

    </div>
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
}
.blue{
  color: blue;
  transition-property: color;
  transition-duration: 1s;
}
.trans-div{
  content: '';
  position: absolute;
  left: 50%;
  right: 50%;
  top: rem(50);
  -webkit-transition:  all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition:  all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border-bottom: 2px solid transparent;
}
.trans-active{
  padding: 0 rem(100);
}
</style>
