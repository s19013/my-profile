<template>
  <div class="menu">
    <div v-for="(element,index) of list" :key="index">
      <router-link :to="element.to"
      class="router-link"
      :style="size"
      >
        {{element.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuListComponent',
    data() {
      return {
        
      }
    },
    props:['list','fontSize'],
    computed:{
      size(){
        return {'--font-size':this.fontSize}
      }
    }
  }
</script>

<style lang="scss" scoped>
.menu{
  margin: 0 auto;
  display: flex;
}
.router-link {
    margin:0 2vmin;
    font-size:var(--font-size);
}
</style>
