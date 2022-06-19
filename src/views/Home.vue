<template>
  <div>
    <name-component :name="homeData.name"></name-component>
    <date-of-birth-component :birthDay="homeData.birthDay"></date-of-birth-component>
  </div>
</template>

<script>
import NameComponent from "../components/home/NameComponent.vue";
import DateOfBirthComponent from "../components/home/DateOfBirthComponent.vue";
import  {HomeData}  from "../datas/HomeData.js";
  export default {
    name: 'HomeView',
    components:{
      NameComponent,
      DateOfBirthComponent
    },
    data() {
      return {
        homeData:new HomeData
      }
    },
  }
</script>
