<template>
  <div>
    <name-component :name="homeData.name"></name-component>
    <date-of-birth-component :birthDay="homeData.birthDay"></date-of-birth-component>
    <link-component :linkList="homeData.linkList"> </link-component>
<!-- 学歴､職歴 -->
    <history-component :list="homeData.careerList" detailName="学歴 職歴"></history-component>
<!-- 資格名 -->
    <history-component :list="homeData.qualificationList" detailName="資格名"></history-component>
    
  </div>
</template>

<script>
// コンポーネント
import NameComponent from "../components/home/NameComponent.vue";
import DateOfBirthComponent from "../components/home/DateOfBirthComponent.vue";
import LinkComponent from "../components/home/LinkComponent.vue";
import HistoryComponent from "../components/home/HistoryComponent.vue";


//データ
import  {HomeData}  from "../datas/HomeData.js";

  export default {
    name: 'HomeView',
    components:{
      NameComponent,
      DateOfBirthComponent,
      LinkComponent,
      HistoryComponent
    },
    data() {
      return {
        homeData:new HomeData
      }
    },
  }
</script>

<style lang="scss">
  
</style>

