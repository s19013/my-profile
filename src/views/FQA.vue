<template>
  <div>
    <v-row>
      <v-btn-toggle
        color="deep-purple accent-3"
        class="tags"
        v-model="toggle_exclusive"
        mandatory
      >
        <v-btn value="すべて" class="v-btn" @click="filter(null)">すべて</v-btn>
        <v-btn value="技術" class="v-btn" @click="filter('技術')">技術</v-btn>
        <v-btn value="興味" class="v-btn" @click="filter('興味')"
          >興味/関心</v-btn
        >
        <v-btn value="性格" class="v-btn" @click="filter('性格')">性格</v-btn>
        <v-btn value="考え" class="v-btn" @click="filter('考え')">考え</v-btn>
        <v-btn value="過去" class="v-btn" @click="filter('過去')">過去</v-btn>
        <v-btn value="その他" class="v-btn" @click="filter('その他')"
          >その他</v-btn
        >
      </v-btn-toggle>
    </v-row>

    <div v-for="element of QAList" :key="element.Q">
      <q-a-component :data="element"> </q-a-component>
    </div>
  </div>
</template>

<script>
import { QAData } from "@/datas/QAData";
import QAComponent from "@/components/QAComponent.vue";
export default {
  name: "FQAView",
  components: {
    QAComponent,
  },
  data() {
    return {
      QA: new QAData(),
      QAList: null,
      //トグル管理
      toggle_exclusive: undefined,
    };
  },
  methods: {
    filter(arg = null) {
      // 引数が空の時
      // すべて表示する
      if (arg == null) {
        return (this.QAList = this.QA.list);
      }

      //つけたタグでフィルタリング
      const List = [];
      for (const element of this.QA.list) {
        if (element.tag.includes(arg)) {
          List.push(element);
        }
      }
      return (this.QAList = List);
    },
  },
  mounted() {
    this.filter(null);
  },
};
</script>

<style lang="scss">
@media (min-width: 451px) {
  .tags {
    flex-wrap: wrap;
    margin: 10px auto;
    button {
      width: 12vw;
    }
    /* p{
      width:2vw;
    } */
  }
}
@media (max-width: 450px) {
  .tags {
    flex-wrap: wrap;
    margin: 20px auto;
    button {
      width: 25vw;
    }
    /* p{
      width:2vw;
    } */
  }
}
.QA {
  margin: 0.5rem 0;
}
</style>
<!-- align="center"
justify="center" -->
