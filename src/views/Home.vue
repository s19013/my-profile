<template>
  <div>
    <p class="lastUpdated"> 最終更新日:2022/6/19</p>
    <name-component
    :name="homeData.name"
    class="name-component">
    </name-component>

    <date-of-birth-component
    :birthDay="homeData.birthDay"
    class="date-of-birth-component">
    </date-of-birth-component>

    <link-component :linkList="homeData.linkList">
    </link-component>

    <!-- 学歴､職歴 -->
    <div class="career">
      <div @click="showCareerList = !showCareerList">
        学歴､職歴
        <v-btn icon>
          <v-icon>
            {{ showCareerList ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
        </v-btn>
      </div>

      <v-expand-transition>
        <div v-show="showCareerList">
          <history-component :list="homeData.careerList" detailName="学歴 職歴">
          </history-component>
        </div>
      </v-expand-transition>
    </div>
    <!--  -->

    <!-- 資格名 -->
    <div>
      <div @click="showQualificationList = !showQualificationList">
        <p>
          資格
          <v-btn icon>
            <v-icon>{{ showQualificationList ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </p>
      </div>

      <v-expand-transition>
        <div v-show="showQualificationList">
          <history-component
            :list="homeData.qualificationList" detailName="資格名">
          </history-component>
        </div>
      </v-expand-transition>
    </div>
    <!--  -->
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
        homeData:new HomeData,
        // トリガー
        showCareerList:false,
        showQualificationList:false
      }
    },
  }
</script>

<style lang="scss">
  .lastUpdated{
    font-size:0.5vw ;
    text-align: right
    }
</style>

