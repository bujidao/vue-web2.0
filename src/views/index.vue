<template>
    <div>
      <p>{{msg}}</p>
      <p>{{$t('app.welcome')}}</p>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'i am vue demo'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
