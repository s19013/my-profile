<template>
  <div>
    <menu-list-component
      :list="menuList.MyWorksList"
      :fontSize="menuList.MyWorksListFontSize"
    ></menu-list-component>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuListComponent  from "@/components/MenuListComponent.vue";

// Appでも呼び出して､ここでも呼び出すって無駄?props使うべき?
import { MenuListData } from "@/datas/MenuListData";
  export default {
    name: 'MyWorks',
    components:{
      MenuListComponent
    },
    data() {
      return {
        menuList:new MenuListData
      }
    },
  }
</script>

<style lang="scss" scoped>
.menu{
  margin: 0 auto
}
</style>
