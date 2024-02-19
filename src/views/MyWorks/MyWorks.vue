<template>
  <div>
    <menu-list-component
      class="menuComponent"
      :list="menuList.MyWorksList"
      :fontSize="menuList.MyWorksListFontSize"
    ></menu-list-component>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuListComponent from "@/components/MenuListComponent.vue";

// Appでも呼び出して､ここでも呼び出すって無駄?props使うべき?
import { MenuListData } from "@/datas/MenuListData";
export default {
  name: "MyWorks",
  components: {
    MenuListComponent,
  },
  data() {
    return {
      menuList: new MenuListData(),
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 951px) {
  .workCard {
    width: 25vw;
    margin: 1rem;
  }
}

@media (min-width: 451px) and (max-width: 950px) {
  .workCard {
    width: 42vw;
    margin: 2vh 2vw;
  }
}

@media (max-width: 450px) {
  .workCard {
    width: 100%;
    margin: 5vh 0;
  }
}
.menuComponent {
  display: flex;
  justify-content: center;
  padding: 1vh 0 0 0;
}
</style>
