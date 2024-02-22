<template>
  <div>
    <div class="menuComponent">
      <button
        @click="
          setData(originalWorks);
          setNowShowing('original');
        "
        :class="{ active: nowShowing == 'original' }"
        :disabled="nowShowing == 'original'"
      >
        <!-- ↑余分な切り替えしないようにすでにアクティブな場合は押せないようにする -->
        オリジナル
      </button>
      <button
        @click="
          setData(sampleWorks);
          setNowShowing('sample');
        "
        :class="{ active: nowShowing == 'sample' }"
        :disabled="nowShowing == 'sample'"
      >
        サンプル
      </button>
    </div>
    <div class="heading">
      <p>{{ data.pageTitle }}</p>
    </div>
    <div class="cardGroup">
      <!-- vue2なのでこの書き方 -->
      <template v-for="(element, index) of data.works">
        <work-card-component :work="element" :key="index"></work-card-component>
      </template>
    </div>
  </div>
</template>

<script>
import WorkCardComponent from "@/components/WorkCardComponent.vue";
import OriginalWorks from "@/datas/OriginalWorks.js";
import SampleWorks from "@/datas/SampleWorks.js";

export default {
  name: "MyWorks",
  components: { WorkCardComponent },
  data() {
    return {
      // 初期値はoriginal
      // dataは安直すぎた?
      originalWorks: new OriginalWorks(),
      sampleWorks: new SampleWorks(),
      data: null,
      nowShowing: "original",
    };
  },
  methods: {
    setData(arg) {
      this.data = arg;
    },
    setNowShowing(arg) {
      this.nowShowing = arg;
    },
  },
  mounted() {
    this.data = this.originalWorks;
  },
};
</script>

<style lang="scss" scoped>
.workCard {
  width: 49%;
  @media (max-width: 450px) {
    width: 100%;
  }
}

.cardGroup {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 450px) {
    gap: 2rem;
  }
}

.heading {
  border-bottom: 1px solid black;
  margin: 1rem 0;
  p {
    margin: 1rem 0;
  }
}
.menuComponent {
  display: flex;
  justify-content: center;

  button {
    display: inline-block;
    width: 8rem;
    font-size: 1.2rem;
    text-align: center;
    @media (max-width: 450px) {
      width: 6rem;
      font-size: 1rem;
    }
  }
  .active {
    background-color: #112d4e;
    color: #f9f7f7;
    font-weight: bold;
  }
}
</style>
