<template>
  <div>
    <template v-for="article of articleData.articles">
      <ArticleComponent
        :article="article"
        :key="article.url"
      ></ArticleComponent>
    </template>
  </div>
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import ArticleData from "@/datas/ArticleData";
export default {
  name: "ArticleView",
  components: {
    ArticleComponent,
  },
  data() {
    return {
      articleData: new ArticleData(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
