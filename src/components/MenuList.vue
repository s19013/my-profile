<template>
  <div class="menu">
    <router-link to="/" class="router-link">基本情報</router-link>
    <router-link to="/MyWorks/Original" class="router-link">作品</router-link>
  </div>
</template>

<script>
  export default {
    name: 'MenuListView',
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.menu{
  margin: 0 auto
}
.router-link {
    margin:0 2vmin
}
</style>
