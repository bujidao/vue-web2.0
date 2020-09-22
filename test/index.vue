<template>
  <div class="app-header">
    {{msg}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-header {
  box-sizing: border-box;
  height: 240px;
  padding: 30px 40px;
  background: $blue;
  position: relative;
}
</style>
