<template>
  <div>
    <header>
      <menu-list-component
        :list="menuList.AppList"
        :fontSize="menuList.AppListFontSize"
      ></menu-list-component>
    </header>

    <div class="main">
      <v-container>
        <router-view></router-view>
      </v-container>
    </div>
  </div>
</template>

<script>
import MenuListComponent  from "./components/MenuListComponent.vue";
import { MenuListData } from "./datas/MenuListData";

export default {
  name: 'App',
  components: {
    MenuListComponent
  },
  data() {
    return {
      menuList:new MenuListData
    }
  },
};
</script>
<style lang="scss">
.main{
  background-color: #ebeef0;
  color:#0a192b;
}
header{
  background-color:#d5e1e9 ;
  display: flex;
}

</style>