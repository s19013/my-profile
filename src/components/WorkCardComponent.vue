<template>
  <div>
    <v-card class="workCard">

    <!-- 写真 -->
    <div class="photo">
        <v-img
            v-if="work.imgUrl == null"
            src="@/assets/img/no_image.jpg"
            >
        </v-img>
        <!--  -->
        <v-img
          v-else
          :src="imgSrc"
        ></v-img>
    </div>
    <!-- -->

    <v-card-title class="title">
      <b>{{work.title}}</b>
    </v-card-title>

    <!-- 作品 -->
    <div class="text" v-if="work.workUrl !== null">
      <a :href="work.workUrl"  target="_blank" rel="noopener noreferrer">作品</a>
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- readme -->
    <div class="text" v-if="work.readmeUrl !== null">
        <a :href="work.readmeUrl"  target="_blank" rel="noopener noreferrer">readme</a>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- コード -->
    <div class="text" v-if="work.readmeUrl !== null">
        <a :href="work.codeUrl"  target="_blank" rel="noopener noreferrer">コード</a>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- 使用した言語など -->
    <div class="text" v-if="work.used !== null">
        <p>使用したフレームワークなど</p>
        <ul>
          <li v-for="(element,index) of work.used" :key="index">
            {{element}}
          </li>
        </ul>
    </div>

      <div v-if="work.comment !== null">
        <v-card-actions @click="show = !show">
          <p>コメントを見る</p>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="comments">
              <div v-html="markdownText"></div>
              <!-- {{markdownText}} -->
              <!-- {{work.comment.trim()}} -->
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>

    </v-card>
  </div>
</template>

<script>
import { marked } from 'marked'
  export default {
    name: 'WorkCardComponent',
    data() {
        return {
            show: false,
            markdownText:marked.parse(this.work.comment)
        }
    },
    props:['work'],
    computed:{
      imgSrc(){
        return require("@/assets/img/" + this.work.imgUrl)
      }
    },
  }
</script>

<style lang="scss" scoped>
@media (min-width :951px){
  .workCard{
    width:25vw;
    margin: 3vh 1vw;
  }
}

@media (min-width: 451px) and (max-width :950px){
  .workCard{
    width:42vw;
    margin: 2vh 2vw;
  }
}

@media (max-width: 450px) {
  .workCard{
    width:100%;
    margin: 5vh 0;
  }
}
.title{
  word-break:break-word;
  font-size:150%
}
.photo{
  width :100%;
  height:240px;
  border-bottom: 1px solid black;
}

.text{
  padding: 1vh 16px;
}

a{
  color: black;
  text-decoration: none;
}

ul{
  margin:0 0 0 5%;
}
li{
  font-size: 80%;
}
</style>