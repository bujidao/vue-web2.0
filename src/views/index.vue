<template>
    <div>
      <p>{{msg}}</p>
      <p>{{$t('app.welcome')}}</p>
      <app-link to="https://vuejs.org/">{{$t('app.vueOfficialWebsite')}}</app-link>
    </div>
</template>

<script>
import AppLink from '@/components/Link/index'
export default {
  name: 'index',
  data () {
    return {
      msg: 'i am vue demo.'
    }
  },
  components: {
    AppLink
  }
}
</script>

<style lang="scss" scoped>

</style>
