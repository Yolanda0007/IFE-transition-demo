<template>
  <div class="container">
    <div class="box-0">box0</div>
    <div class="box-0 skew">box0</div>
    <div class="box-0 scale">box0</div>
    <div class="box-0 rotate">box0</div>
    <div class="box-0 translate">box0</div>
    <div class="box-0 matrix">box0</div>
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
    width: rem(80);
    border: 1px solid #dedede;
    background-color: #f8f6f7;
    display: inline-block;
    margin: rem(30);
    font-size: rem(20);
    text-align: center;
    line-height: normal;
    padding: rem(30) 0;
  }

  .skew{
    transform: skew(30deg);
  }
</style>
