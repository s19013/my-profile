<template>
  <div>
    <div class="heading">
      <p>参考書などのサンプルを見ながら作った作品</p>
      <p>一部はアレンジしてる</p>
    </div>

    <div class="cardGroup">
      <div v-for="(element, index) of sampleWorks.works" :key="index">
        <div>
          <work-card-component :work="element"></work-card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCardComponent from "@/components/WorkCardComponent.vue";
import { MyWorksSampleWorks } from "@/datas/MyWorksSampleWorks.js";
export default {
  name: "MyWorks-SamplesView",
  components: {
    WorkCardComponent,
  },
  data() {
    return {
      sampleWorks: new MyWorksSampleWorks(),
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
</style>
