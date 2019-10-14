<template>
  <nuxt-child
    keep-alive
    :keep-alive-props="{include: includeComponents}"
    class="nuxt-child"/>
</template>
<script>
export default {
  name:"NKAlive",
  data() {
    return {
    };
  },
  computed: {
    includeComponents() {
      return this.$store.state.base.includeComponents
    },
    app(){
      return this
    }
  },
}
</script>
<style lang="scss" scoped>
</style>
