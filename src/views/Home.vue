<template>
  <div>
    <p class="lastUpdated"> 最終更新日:2023/01/31</p>
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

    <div class="paiza">
      <h2>Paiza</h2>
      <h3>ランク:B</h3>
      <img src="@/assets/img/paiza.png" alt="">
    </div>
    <div class="github-tips">
      <h2>githubの状態</h2>
      <img v-if="loading" class="loading" src="@/assets/img/loading.png" alt="">
      <img class="short" src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=s19013&theme=default" alt="">
      <img class="short" src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=s19013&theme=default" alt="">
      <img class="long" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=s19013&theme=default" alt="" @load="loaded()">
    </div>
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
        showCareerList:true,
        showQualificationList:true,
        loading:true,
      }
    },
    methods:{
      loaded(){this.loading = false}
    }
  }
</script>

<style lang="scss">
  .lastUpdated{
    font-size:0.5vw ;
    text-align: right
  }
  .paiza{
    margin: 2rem 0;
    img{width: 50%;}
  }
  .github-tips{
    margin: 2rem 0;
    @media (min-width: 501px) {
      img{zoom: 0.8;}
    }
    @media (max-width: 500px) {
      img{width: 50%;}
      .long{
        width: 100%;
      }
    }
  }
  .loading{
    width: 20%;
  }
</style>

