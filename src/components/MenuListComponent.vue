<template>
  <div class="menu">
    <div v-for="(element,index) of list" :key="index">
      <router-link :to="element.to"
      class="router-link"
      :style="size"
      >
        {{element.title}}
        <font-awesome-icon :icon="element.icon" v-if="element.icon"/>
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
  margin: auto;
  display: flex;
}
.router-link {
    margin:0 2vmin;
    font-size:var(--font-size);
}
a{
  padding: 0 1vw;
  color: black;
  text-decoration: none;
}
.router-link-active{
  background-color:#112d4e;
  color: #f9f7f7;
  font-weight: bold;
}
</style>
