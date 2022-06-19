<template>
  <div>
    <name-component :name="homeData.name"></name-component>
    <date-of-birth-component :birthDay="homeData.birthDay"></date-of-birth-component>
    <link-component :linkList="homeData.linkList"> </link-component>
    <career-component :careerList="homeData.careerList"></career-component>
    
  </div>
</template>

<script>
// コンポーネント
import NameComponent from "../components/home/NameComponent.vue";
import DateOfBirthComponent from "../components/home/DateOfBirthComponent.vue";
import LinkComponent from "../components/home/LinkComponent.vue";
import CareerComponent from "../components/home/CareerComponent.vue";


//データ
import  {HomeData}  from "../datas/HomeData.js";
  export default {
    name: 'HomeView',
    components:{
      NameComponent,
      DateOfBirthComponent,
      LinkComponent,
      CareerComponent
    },
    data() {
      return {
        homeData:new HomeData
      }
    },
  }
</script>


