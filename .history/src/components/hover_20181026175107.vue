<template>
  <div class="container">
    <div class="img-wrap hover">
      <img src="../assets/img/head.jpg"/>
      <div class="overlay">
        <div class="overlay-content">
          <p class="linear">欢迎参加</p>
          <a href="sign-in">点击报名</a>
        </div>
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="left"></div>
        <div class="right"></div>
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

</style>
