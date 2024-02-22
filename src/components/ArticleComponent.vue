<template>
  <div class="article">
    <a :href="article.url">
      <h3 class="Title">{{ article.title }}</h3>
    </a>
    <div class="comment">
      <template v-for="(row, index) of article.comment">
        <p :key="index">{{ row }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
