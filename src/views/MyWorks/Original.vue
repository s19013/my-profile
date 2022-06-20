<template>
  <div class="cardGroup">
    <div v-for="(element,index) of originalWorks.works" :key="index">

      <div >
        <work-card-component :work = element></work-card-component>
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
</style>
