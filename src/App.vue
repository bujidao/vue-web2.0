<template>
  <div id="app">
    <img src="./assets/logo.png">
    <span @click="changeLanguage">
      <svg-icon icon-class="language"/>
    </span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeLanguage () {
      const language = this.$store.getters.language
      const temp = language === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = temp
      this.$store.dispatch('app/setLanguage', temp)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
