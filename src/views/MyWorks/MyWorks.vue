<template>
  <div>
    <router-link to="Original">オリジナル</router-link>
    <router-link to="Samples">サンプル</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MyWorks',
    data: () => ({
      
    }),
  }
</script>

<style lang="scss" scoped>

</style>
