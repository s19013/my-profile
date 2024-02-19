<template>
  <v-card class="workCard">
    <!-- 写真 -->
    <v-img v-if="work.imgUrl == null" src="@/assets/img/no_image.jpg"> </v-img>
    <!--  -->
    <v-img v-else :src="imgSrc" lazy-src="@/assets/img/no_image.jpg"> </v-img>
    <!-- -->

    <v-card-title class="title">
      <b>{{ work.title }}</b>
    </v-card-title>

    <!-- 作品 -->
    <div class="text" v-if="work.workUrl !== null">
      <a :href="work.workUrl" target="_blank" rel="noopener noreferrer">作品</a>
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- readme -->
    <div class="text" v-if="work.readmeUrl !== null">
      <a :href="work.readmeUrl" target="_blank" rel="noopener noreferrer"
        >readme(詳細)</a
      >
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- コード -->
    <div class="text" v-if="work.codeUrl !== null">
      <a :href="work.codeUrl" target="_blank" rel="noopener noreferrer"
        >コード</a
      >
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- 使用した言語など -->
    <div class="text" v-if="work.used !== null">
      <p>使用したフレームワークなど</p>
      <ul>
        <li v-for="(element, index) of work.used" :key="index">
          {{ element }}
        </li>
      </ul>
    </div>

    <!-- コメント -->
    <div v-if="work.comment !== null">
      <!--  -->
      <v-card-actions @click="show = !show">
        <p>軽いコメント</p>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <!-- 表示するコメント -->
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="comments">
            <div v-html="markdownText"></div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </div>
  </v-card>
</template>

<script>
import { marked } from "marked";
marked.setOptions({
  breaks: true,
  gfm: true,
});
export default {
  name: "WorkCardComponent",
  data() {
    return {
      show: false,
      markdownText: marked.parse(this.work.comment),
    };
  },
  props: ["work"],
  computed: {
    imgSrc() {
      return require("@/assets/img/" + this.work.imgUrl);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  word-break: break-word;
  font-size: 1.5rem;
}
.v-img {
  border-bottom: 1px solid black;
}

.text {
  padding: 1vh 16px;
}

ul {
  margin: 0 0 0 5%;
}
li {
  font-size: 0.8rem;
}
</style>
