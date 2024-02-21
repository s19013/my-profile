<template>
  <div>
    <div class="heading">
      <p>{{ works.pageTitle }}</p>
    </div>
    <div class="cardGroup">
      <!-- vue2なのでこの書き方 -->
      <template v-for="(element, index) of works.works">
        <work-card-component :work="element" :key="index"></work-card-component>
      </template>
    </div>
  </div>
</template>

<script>
import WorkCardComponent from "@/components/WorkCardComponent.vue";
import { MyWorksOriginalWorks } from "@/datas/MyWorksOriginalWorks.js";
export default {
  name: "MyWorks",
  components: { WorkCardComponent },
  data() {
    return {
      // 初期値はoriginal
      // works.worksとなってややこしいためもっと適切な変数を探す｡
      works: new MyWorksOriginalWorks(),
    };
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
  padding: 1vh 0 0 0;
}
</style>
