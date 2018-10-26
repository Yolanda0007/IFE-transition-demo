<template>
  <div class="container">
    <form>
      <select>
        <option>qwe</option>
      </select>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Area',
  data () {
    return {
      province: [
        {
          id: '1001',
          name: '江苏省'
        }, {
          id: '1002',
          name: '浙江省'
        }
      ],
      city: [
        {
          id: '100101',
          name: '南京'
        }, {
          id: '100102',
          name: '徐州'
        }, {
          id: '100201',
          name: '杭州'
        }
      ],
      area: [
        {
          id: '10010101',
          name: 'sss'
        }, {
          id: '10020101',
          name: 'nnnn'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
