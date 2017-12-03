<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from './components/tab/tab.vue'
  import MHeader from './components/m-header/m-header.vue'
  export default {
    name: 'app',
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style lang="stylus" scoped>
  @import "common/stylus/variable.styl"
  #app
    color: $color-theme
</style>
