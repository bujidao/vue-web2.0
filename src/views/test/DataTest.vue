<template>
  <div>
    <hr>
    <p>{{msg}}</p>
    <div class="row">
      <div class="col">
        <button @click="getData1">获取地址一数据</button>
        <br>
        <ul>
          <li v-for="(item, index) in data1.data">
            {{item}}
          </li>
        </ul>
        <!-- {{data1}} -->
      </div>
      <div class="col">
        <button @click="getData2">获取地址二数据</button>
        <br>
        <ul>
          <li v-for="(item, index) in data2.data">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import AppLink from '@/components/Link/index'
import {
  queryTest1,
  queryTest2
} from '@/api/test'
export default {
  name: 'index',
  data () {
    return {
      msg: '多服务器数据测试',
      data1: [],
      data2: []
    }
  },
  components: {
    AppLink
  },
  methods: {
    getData1() {
      queryTest1().then(res => {
        this.data1 = res
        console.log(res)
      })
    },
    getData2() {
      queryTest2().then(res => {
        this.data2 = res
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  width: 100%;
  .col {
    width: 50%;
    float: left;
  }
}
</style>
