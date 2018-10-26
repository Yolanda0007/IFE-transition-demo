<template>
  <div class="container">
    <div class="box-0"></div>
    <div class="box-0 skew"></div>
    <div class="box-0 scale"></div>
    <div class="box-0 rotate"></div>
    <div class="box-0 translate"></div>
    <div class="box-0 matrix"></div>
  </div>
</template>
<script>
export default {
  name: 'transform'
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/rem.scss';
  .box-0{
    width: rem(60);
    height: rem(60);
    border: 1px solid #dedede;
    background-color: #f8f6f7;
    display: inline-block;
    margin: rem(30);
  }

  .skew{
    transform: skew(30deg);
  }
</style>
