<template>
  <div>
    <div class="heading">
      <p>設計などから自分で考えた作品</p>
    </div>
      <div class="cardGroup">
        <div v-for="(element,index) of originalWorks.works" :key="index">

          <div >
            <work-card-component :work = element></work-card-component>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
import WorkCardComponent from "@/components/WorkCardComponent.vue";
import { MyWorksOriginalWorks } from "@/datas/MyWorksOriginalWorks.js";

  export default {
    name: 'MyWorks-OriginalView',
    components:{
      WorkCardComponent
    },
    data() {
      return {
        originalWorks:new MyWorksOriginalWorks,
      }
    },
  }
</script>

<style lang="scss" scoped>
@media (min-width: 501px){
  .cardGroup{
    display: flex;
    flex-wrap:wrap;
    
  }
}
.heading{
  border: 1px solid black;
  margin: 2vh 0;
  background-color: #dbe2ef;
  p{
    margin: 0 2vw;
  }
}
</style>
