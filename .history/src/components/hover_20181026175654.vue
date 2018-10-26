<template>
  <div class="container">
    <div class="img-wrap hover">
      <img src="../assets/img/head.jpg"/>
      <div class="overlay">
        <div class="overlay-content">
          <p class="linear">欢迎参加</p>
          <a href="sign-in">点击报名</a>
        </div>
        <div class="top border"></div>
        <div class="bottom border"></div>
        <div class="left border"></div>
        <div class="right border"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hover',
  data () {
    return {

    }
  },
  computed: {

  },
  components: {

  },
  methods: {

  },
  beforeMount () {

  },
  mounted () {

  }
}
</script>
<style lang="scss" scoped>

  .img-wrap{
    position: relative;
  }
  .overlay{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: rem(20);

    &-content{

    }
  }
  .border{
    position: absolute;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  }
  .top{
    top: 0;
    left: 0;
    width: 0;
    height: rem(5);
  }
  .bottom{
    bottom: 0;
    left: 0;
    width: 0;
    height: rem(5);
  }
  .left{
    left: 0;
    top: 0;
  }
  .right{
    right: 0;
    top: 0;
  }
</style>
