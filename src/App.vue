<template>
  <div>
    <v-system-bar>
      <menu-list></menu-list>
    </v-system-bar>

    <v-container>
      <router-view></router-view>
    </v-container>
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
