<template>
  <div>
    <p class="lastUpdated">最終更新日:2024-03-18</p>
    <nick-name-component :nickName="homeData.nickName" class="name-component">
    </nick-name-component>

    <date-of-birth-component
      :birthDay="homeData.birthDay"
      class="date-of-birth-component"
    >
    </date-of-birth-component>

    <div class="self-introduction">
      <p>こんにちは､私のプロフィールにアクセスいただきありがとうございます｡</p>
      <p>私は､ITの専門学校を卒業をした既卒の人間です｡</p>
      <p>
        学校ではsql,linuxコマンド,python文法,kotlin文法,html基礎,css基礎,アルゴリズムなどを学んだほか｡資格獲得へ向けた授業を受けました｡
        pythonのTikinterを使った作品作りやandroidのサンプルアプリ作成などもしました｡
      </p>
      <p>
        卒業制作では、アンドロイドアプリのゲームを作り、ゲームのコンピューターの作成やストアへの出品に挑戦し
        ました。
      </p>
      <p>
        今現在は､php,laravel,javascript,vue.jsを中心に勉強して何か作ったり､カンファレンスへの参加｡
        勉強会への参加､及び登壇をしたりしております｡
      </p>
      <p>
        他には､技術書やそれ以外の本を読んだりたまにqiitaを書いております｡
        laravelとvue.jsを組み合わせたアプリを開発し､運用しております｡
        vue.jsとjavascriptでテトリスを作ってみたりもしました｡
      </p>
      <p>
        業務外では趣味, 個人開発,
        勉強,休息をしっかり取ることなどを大切にしたいので、休むことや､プライベートを大事にすることに対して肯定的な会社を探しております｡
      </p>
      <p>
        実務未経験故経験不足でまだまだ学ぶべきことがあると思います｡
        こんな私でもよろしければ､お声がけいただけると嬉しいです｡
      </p>
    </div>

    <link-component :linkList="homeData.linkList"> </link-component>

    <!-- 学歴､職歴 -->
    <!-- <div class="career">
      <div @click="showCareerList = !showCareerList">
        学歴､職歴
        <v-btn icon>
          <v-icon>
            {{ showCareerList ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
        </v-btn>
      </div>

      <v-expand-transition>
        <div v-show="showCareerList">
          <history-component :list="homeData.careerList" detailName="学歴 職歴">
          </history-component>
        </div>
      </v-expand-transition>
    </div> -->
    <!--  -->

    <!-- 資格名 -->
    <div>
      <div @click="showQualificationList = !showQualificationList">
        <p>
          資格
          <v-btn icon>
            <v-icon>{{
              showQualificationList ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </p>
      </div>

      <v-expand-transition>
        <div v-show="showQualificationList">
          <history-component
            :list="homeData.qualificationList"
            detailName="資格名"
          >
          </history-component>
        </div>
      </v-expand-transition>
    </div>
    <!--  -->

    <div class="paiza">
      <h2>Paiza</h2>
      <h3>ランク:B</h3>
      <img src="@/assets/img/paiza.png" alt="" />
    </div>
    <div class="github-tips">
      <h2>githubの状態</h2>
      <img
        v-if="loading"
        class="loading"
        src="@/assets/img/loading.png"
        alt=""
      />
      <img
        class="short"
        src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=s19013&theme=default"
        alt=""
      />
      <img
        class="short"
        src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=s19013&theme=default"
        alt=""
      />
      <img
        class="long"
        src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=s19013&theme=default"
        alt=""
        @load="loaded()"
      />
    </div>
  </div>
</template>

<script>
// コンポーネント
import NickNameComponent from "../components/home/NickName.vue";
import DateOfBirthComponent from "../components/home/DateOfBirthComponent.vue";
import LinkComponent from "../components/home/LinkComponent.vue";
import HistoryComponent from "../components/home/HistoryComponent.vue";

//データ
import { HomeData } from "../datas/HomeData.js";

export default {
  name: "HomeView",
  components: {
    NickNameComponent,
    DateOfBirthComponent,
    LinkComponent,
    HistoryComponent,
  },
  data() {
    return {
      homeData: new HomeData(),
      // トリガー
      showCareerList: true,
      showQualificationList: true,
      loading: true,
    };
  },
  methods: {
    loaded() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss">
.self-introduction {
  margin: 2rem;
}
.lastUpdated {
  font-size: 1rem;
  text-align: right;
}
.paiza {
  margin: 2rem 0;
  img {
    width: 50%;
  }
}
.github-tips {
  margin: 2rem 0;
  @media (min-width: 501px) {
    img {
      zoom: 0.8;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 50%;
    }
    .long {
      width: 100%;
    }
  }
}
.loading {
  width: 20%;
}
</style>
