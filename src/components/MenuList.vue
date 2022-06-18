<template>
  <div>
    <router-link to="/" class="router-link">基本情報</router-link>
    <router-link to="/MyWorks" class="router-link">作品</router-link>
  </div>
</template>

<script>
  export default {
    name: 'MenuList',

    data: () => ({
      
    }),
  }
</script>

<style lang="scss" scoped>
.router-link {
  margin:0 2vmin
}
</style>
