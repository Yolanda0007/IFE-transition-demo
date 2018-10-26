<template>
  <div class="container">
    <form>
      <select class="province">
        <option></option>
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
          name: '栖霞区'
        }, {
          id: '10010102',
          name: '江宁区'
        }, {
          id: '10010201',
          name: '鼓楼区'
        }, {
          id: '10010202',
          name: '邳州市'
        }, {
          id: '10020101',
          name: '余杭区'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
