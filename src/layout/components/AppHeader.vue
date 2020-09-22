<template>
  <div class="app-header">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '组件测试'
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-header {
  box-sizing: border-box;
  padding: 30px 40px;
  background: $theme;
  position: relative;
}
</style>
