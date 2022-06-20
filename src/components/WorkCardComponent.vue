<template>
  <div>
    <v-card class="workCard">

    <!-- 写真 -->
    <div class="photo">
        <v-img
            v-if="work.img == null"
            src="@/assets/img/no_image.jpg"
            >
        </v-img>
        <!--  -->
        <!-- <v-img
          v-else
          :src="work.img"
        ></v-img> -->
    </div>

    <v-card-title class="title">
      {{work.title}}
    </v-card-title>

    <v-card-text v-if="work.codeUrl !== null">
        <a :href="work.codeUrl">コードを見る</a>
    </v-card-text>

    <v-card-text v-if="work.workUrl !== null">
        <a :href="work.workUrl">作品を見る</a>
    </v-card-text>

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
    props:['work']
  }
</script>

<style lang="scss" scoped>
@media (max-width: 450px) {
  .workCard{
    max-width:100vmin;
    margin: 5vmin 0;
  }
}

@media (min-width: 451px) and (max-width :950px){
  .workCard{
    max-width:44vmin;
    margin: 2vmin;
  }
}

@media (min-width :951px){
  .workCard{
    max-width:99vmin;
    margin: 4vmin;
  }
}
</style>