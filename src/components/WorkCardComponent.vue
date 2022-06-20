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
      {{work.title}}
    </v-card-title>

    <!-- 作品 -->
    <div class="text" v-if="work.workUrl !== null">
      <a :href="work.workUrl">作品</a>
      <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- readme -->
    <div class="text" v-if="work.readmeUrl !== null">
        <a :href="work.readmeUrl">readme</a>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

    <!-- コード -->
    <div class="text" v-if="work.readmeUrl !== null">
        <a :href="work.codeUrl">コード</a>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
    </div>

      <div v-if="work.comment !== null">
        <v-card-actions>
          <v-btn
            color="orange lighten-2"
            text
          >
            コメントを見る
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            icon
            @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="comments">
              {{work.comment}}
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>

    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'WorkCardComponent',
    data() {
        return {
            show: false,
        }
    },
    props:['work'],
    computed:{
      imgSrc(){
        return require("@/assets/img/" + this.work.imgUrl)
      }
    }
  }
</script>

<style lang="scss" scoped>
@media (max-width: 450px) {
  .workCard{
    width:94vw;
    margin: 5vh 0;
  }
}

@media (min-width: 451px) and (max-width :950px){
  .workCard{
    width:44vw;
    margin: 2vh 2vw;
  }
}

@media (min-width :951px){
  .workCard{
    width:25vw;
    margin: 3vh 1vw;
  }
}
.photo{
  width :100%;
  height:250px;
  border-bottom: 1px solid black;
}

.text{
  padding: 1vh 16px;
}

a{
  color: black;
  text-decoration: none;
}

</style>