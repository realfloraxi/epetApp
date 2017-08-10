<template>
  <div>
    <epet-header></epet-header>
    <epet-tab></epet-tab>
    <epet-footer></epet-footer>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import tab from './components/tab/tab.vue'
  import footer from "./components/footer/footer.vue"

  export default {
    components: {
      'epet-header': header,
      'epet-tab':tab,
      'epet-footer':footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
