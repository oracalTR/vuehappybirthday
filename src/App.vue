<template>
  <the-header-vue></the-header-vue>
  <the-main-vue></the-main-vue>
  <the-footer-vue></the-footer-vue>
</template>

<script module>
import ('./assets/style.scss')
import TheHeaderVue from './components/TheHeader.vue'
import TheMainVue from './components/TheMain.vue'
import TheFooterVue from './components/TheFooter.vue'


export default {
  name: 'App',
  components: {
    TheHeaderVue,
    TheMainVue,
    TheFooterVue,
  }
}
</script>

<style>
  
</style>
