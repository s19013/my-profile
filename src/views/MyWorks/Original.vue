<template>
  <div>
    <div class="heading">
      <p>設計などから自分で考えた作品</p>
    </div>
    <div class="cardGroup">
      <div v-for="(element, index) of originalWorks.works" :key="index">
        <div>
          <work-card-component :work="element"></work-card-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkCardComponent from "@/components/WorkCardComponent.vue";
import { MyWorksOriginalWorks } from "@/datas/MyWorksOriginalWorks.js";

export default {
  name: "MyWorks-OriginalView",
  components: {
    WorkCardComponent,
  },
  data() {
    return {
      originalWorks: new MyWorksOriginalWorks(),
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 951px) {
  .workCard {
    width: 25vw;
    margin: 1rem;
  }
}

@media (min-width: 451px) and (max-width: 950px) {
  .workCard {
    width: 42vw;
    margin: 2vh 2vw;
  }
}

@media (max-width: 450px) {
  .workCard {
    width: 100%;
    margin: 5vh 0;
  }
}
@media (min-width: 501px) {
  .cardGroup {
    display: flex;
    flex-wrap: wrap;
  }
}
.heading {
  border-bottom: 1px solid black;
  margin: 2vh 0;
  p {
    margin: 0 2vw;
  }
}
</style>
<!-- background-color: #dbe2ef; -->
