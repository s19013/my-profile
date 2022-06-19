<template>
  <div>
    <v-system-bar>
      <menu-list></menu-list>
    </v-system-bar>

    <div class="main">
      <v-container>
        <router-view></router-view>
      </v-container>
    </div>
  </div>
</template>

<script>
import MenuList  from "./components/MenuList.vue";

export default {
  name: 'App',

  components: {
    MenuList
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.main{
  background-color: #f3f9fc;
}
  
</style>