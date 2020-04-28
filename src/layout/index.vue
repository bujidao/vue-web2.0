<template>
  <div class="app-wrapper">
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
export default {
  name: 'Layout',
  data () {
    return {
      msg: 'hi app'
    }
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
