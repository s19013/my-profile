<template>
  <div class="article">
    <a :href="article.url">
      <h2 class="Title">{{ article.title }}</h2>
    </a>
    <div class="comment">
      <template v-for="(row, index) of comment">
        <p :key="index">{{ row }}</p>
      </template>
    </div>
    <p class="created_at">created_at:{{ dateFormat(article.created_at) }}</p>
    <div class="counts">
      <p>
        <font-awesome-icon icon="fa-regular fa-comment" />:{{
          article.comments_count
        }}
      </p>
      <p>
        <font-awesome-icon icon="fa-regular fa-heart" />:{{
          article.likes_count
        }}
      </p>
      <p>
        <font-awesome-icon icon="fa-brands fa-get-pocket" />:{{
          article.stocks_count
        }}
      </p>
      <p>
        <font-awesome-icon icon="fa-regular fa-eye" />:{{
          article.page_views_count
        }}
      </p>
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
    comment: {
      type: Array,
    },
  },
  methods: {
    dateFormat(arg) {
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
  background-color: rgb(227, 227, 227);
}
h2 {
  border-bottom: 1px solid black;
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
