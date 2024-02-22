<template>
  <div>
    <p>いくつかピックアップしました｡</p>
    <p class="caution">
      ※qiita
      apiを使っており何度も再読み込みすると制限がかかり記事が表示されない場合がございます｡
    </p>
    <div class="iconInfomation">
      <p><font-awesome-icon icon="fa-regular fa-comment" />:コメント数</p>
      <p><font-awesome-icon icon="fa-regular fa-heart" />:いいね数</p>
      <p><font-awesome-icon icon="fa-brands fa-get-pocket" />:ストック数</p>
      <p><font-awesome-icon icon="fa-regular fa-eye" />:閲覧数</p>
    </div>

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

<style lang="scss" scoped>
.caution {
  color: rgb(163, 0, 0);
  font-weight: bolder;
}
.iconInfomation {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
</style>
