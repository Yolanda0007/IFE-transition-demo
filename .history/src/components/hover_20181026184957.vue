<template>
  <div class="container">
    <div class="img-wrap hover">
      <img src="../assets/img/head.jpg"/>
      <div class="overlay">
        <div class="overlay-content">
          <p class="linear">欢迎参加</p>
          <a href="sign-in">点击报名</a>
          <div class="top border"></div>
          <div class="bottom border"></div>
          <div class="left border"></div>
          <div class="right border"></div>
        </div>

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
@import '../assets/scss/rem.scss';
  .img-wrap{
    width: rem(300);
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
      position: relative;
      margin: rem(20);
      padding: rem(10) 0;
    }
  }
  .border{
    position: absolute;
    background-color: red;
    transition: all ease-in-out 1s;
  }
  .top{
    top: 0;
    left: 50%;
    width: 0;
    height: rem(5);
  }
  .bottom{
    bottom: 0;
    left: 50%;
    width: 0;
    height: rem(5);
  }
  .left{
    left: 0;
    top: 50%;
    height: 0;
    width: rem(3);
  }
  .right{
    right: 0;
    top: 50%;
    height: 0;
    width: rem(3);
  }
  .overlay:hover .top,.overlay:hover .bottom{
    width: 100%;
    left: 0;
  }
 .overlay:hover .left,.overlay:hover .right{
    height: 100%;
    top: 0;
  }
</style>
