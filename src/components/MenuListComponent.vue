<template>
  <div class="menu">
    <div v-for="(element, index) of list" :key="index">
      <router-link :to="element.to" class="router-link">
        {{ element.title }}
        <font-awesome-icon :icon="element.icon" v-if="element.icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuListComponent",
  data() {
    return {};
  },
  props: ["list"],
};
</script>

<style lang="scss" scoped>
.menu {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.router-link {
  display: inline-block;
  width: 9rem;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 480px) {
    width: 6rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
}
a {
  color: black;
  text-decoration: none;
}
.router-link-active {
  background-color: #112d4e;
  color: #f9f7f7;
  font-weight: bold;
}
</style>
