<template>
  <div>
    <div class="tags">
      <template v-for="label of labels">
        <button
          :key="label"
          @click="
            filter(label);
            setNowShowing(label);
          "
          :class="{ active: nowShowing == label }"
          :disabled="nowShowing == label"
        >
          {{ label }}
        </button>
      </template>
    </div>

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
      labels: ["すべて", "技術", "興味/関心", "性格", "過去", "その他"],
      QA: new QAData(),
      QAList: null,
      nowShowing: "すべて",
    };
  },
  methods: {
    filter(arg = null) {
      // 引数が空の時
      // すべて表示する
      if (arg == "すべて") {
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
    setNowShowing(arg) {
      this.nowShowing = arg;
    },
  },
  mounted() {
    this.filter("すべて");
  },
};
</script>

<style lang="scss">
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  width: 100%;
  button {
    font-size: 1.2rem;
    background-color: #ebeef0;
    color: #000000;
    border: 1px solid black;
    @media (min-width: 481px) {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
    }
    @media (max-width: 480px) {
      width: 25%;
    }
  }
  .active {
    background-color: #112d4e;
    color: #f9f7f7;
    font-weight: bold;
  }
}
.QA {
  margin: 0.5rem 0;
}
</style>
