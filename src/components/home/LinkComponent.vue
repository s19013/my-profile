<!-- リンクをforをつかってまとめて表示 -->
<template>
  <div>
    <p>リンク</p>
    <ul>
      <li v-for="link of linkList" :key="link.title">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">
          <p>{{ link.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinkComponent",
  data() {
    return {};
  },
  props: ["linkList"],
};
</script>

<style lang="scss" scoped>
li {
  margin: 0.2rem 0 0.2rem 2.5rem;
}
</style>
