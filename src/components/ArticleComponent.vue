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
    <p class="created_at">created_at:{{ date() }}</p>
    <div class="counts">
      <p><font-awesome-icon icon="fa-regular fa-comment" />111</p>
      <p><font-awesome-icon icon="fa-regular fa-heart" />111</p>
      <p><font-awesome-icon icon="fa-brands fa-get-pocket" />111</p>
      <p><font-awesome-icon icon="fa-regular fa-eye" />111</p>
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
  methods: {
    date(arg = "2000-01-01T00:00:00+00:00") {
      // Tより前の文字列たちを返す
      return arg.match(/^.*(?=T)/)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  border: 1px solid black;
  padding: 1rem;
}
.comment {
  margin-top: 0.5rem;
}
.created_at {
  text-align: end;
}
.counts {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
