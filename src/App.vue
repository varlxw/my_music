<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from './components/m-header/m-header.vue'
  export default {
    name: 'app',
    components: {
      MHeader
    }
  }
</script>

<style lang="stylus" scoped>
  @import "common/stylus/variable.styl"
  #app
    color: $color-theme
</style>
