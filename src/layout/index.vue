<template>
  <div class="app-container">
    <app-header></app-header>
    <img src="@/assets/logo.png">
    <span @click="changeLanguage">
      <svg-icon icon-class="language"/>
    </span>
    <router-view/>
  </div>
</template>

<script>
import ResizeMixin from './mixin/ResizeHandler'
import { mapState } from 'vuex'
import { AppHeader } from './components'
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'hi app'
    }
  },
  components: {
    AppHeader
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      device: state => state.app.device
    })
  },
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

<style lang="scss" scoped>
  .app-container {
    background: $skyBlue;
  }
</style>
