<template>
    <div>
      <p>{{msg}}</p>
      <p>{{$t('app.welcome')}}</p>
      <app-link to="https://vuejs.org/">{{$t('app.vueOfficialWebsite')}}</app-link>
      <data-test></data-test>
    </div>
</template>

<script>
import AppLink from '@/components/Link/index'
import DataTest from '@/views/test/DataTest.vue'
export default {
  name: 'index',
  data () {
    return {
      msg: 'i am vue demo.'
    }
  },
  components: {
    AppLink,
    DataTest
  }
}
</script>

<style lang="scss" scoped>

</style>
