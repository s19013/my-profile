<template>
  <div>
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

    <template v-for="article of articles">
      <ArticleComponent
        :article="article.response"
        :comment="article.comment"
        :key="article.url"
      ></ArticleComponent>
    </template>

    <p>これらはいくつかピックアップしたものです｡</p>
    <p>
      もし､もっと見たいと思ってくださいましたら
      <a
        href="https://qiita.com/hideya670"
        target="_blank"
        rel="noopener noreferrer"
        >こちらをどうぞ</a
      >
    </p>
  </div>
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import ArticleData from "@/datas/ArticleData";
const axios = require("axios");
export default {
  name: "ArticleView",
  components: {
    ArticleComponent,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    // qiitaから指定したデータ達を取ってくる
    async fetchQiitaDatas() {
      const baseUrl = "https://qiita.com/api/v2/items";
      const baseArticleData = new ArticleData();
      for (const articleData of baseArticleData.articles) {
        try {
          const response = await axios.get(`${baseUrl}/${articleData.id}`);
          this.articles.push({
            response: response.data,
            comment: articleData.comment,
          });
          // キャッシュも保存する
          this.$store.commit("setArticleCache", {
            response: response.data,
            comment: articleData.comment,
          });
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  created() {
    if (this.$store.getters.haveCache) {
      // キャッシュを代入
      this.articles = this.$store.state.articles;
    } else {
      // キャッシュが無い時だけapi通信をする
      this.fetchQiitaDatas();
    }

    // デバック用のテストデータ
    // this.articles.push({
    //   response: {
    //     url: "testurl",
    //     title: "testtitle",
    //     created_at: "2022-01-01T00",
    //     comments_count: 0,
    //     likes_count: 0,
    //     stocks_count: 0,
    //     page_views_count: 0,
    //   },
    //   comment: ["test comment"],
    // });
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
.article {
  margin-bottom: 0.5rem;
}
</style>
