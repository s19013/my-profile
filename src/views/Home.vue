<template>
  <div>
    <name-component></name-component>
  </div>
</template>

<script>
import NameComponent from "../components/home/NameComponent.vue";
  export default {
    name: 'HomeView',
    components:{
      NameComponent
    },
    data() {
      return {
        
      }
    },
  }
</script>
