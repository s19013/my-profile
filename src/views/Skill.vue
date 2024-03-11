<template>
  <div class="skills">
    <div class="menuComponent">
      <button
        @click="setNowShowing('skills')"
        :class="{ active: nowShowing == 'skills' }"
        :disabled="nowShowing == 'skills'"
      >
        <!-- ↑余分な切り替えしないようにすでにアクティブな場合は押せないようにする -->
        今持っているスキル
      </button>
      <button
        @click="setNowShowing('wantLearnData')"
        :class="{ active: nowShowing == 'wantLearnData' }"
        :disabled="nowShowing == 'wantLearnData'"
      >
        勉強予定
      </button>
    </div>
    <div v-show="nowShowing == 'skills'">
      <template v-for="skill of skills">
        <skill-component :skill="skill" :key="skill.name"></skill-component>
      </template>
    </div>
    <div v-show="nowShowing == 'wantLearnData'">
      <template v-for="skill of wantLearnData">
        <skill-component :skill="skill" :key="skill.name"></skill-component>
      </template>
    </div>
  </div>
</template>

<script>
import SkillComponent from "../components/SkillComponent.vue";

import { SkillData } from "../datas/SkillData.js";
import { wantLearnData } from "../datas/wantLearnData.js";
export default {
  name: "SkillView",
  components: {
    SkillComponent,
  },
  data() {
    return {
      skills: new SkillData().skills,
      wantLearnData: new wantLearnData().skills,
      nowShowing: "skills",
    };
  },
  methods: {
    setNowShowing(arg) {
      this.nowShowing = arg;
    },
  },
};
</script>

<style lang="scss" scoped>
.menuComponent {
  display: flex;
  justify-content: center;

  button {
    display: inline-block;
    width: 8rem;
    font-size: 1.2rem;
    text-align: center;
    @media (max-width: 480px) {
      width: 6rem;
      font-size: 1rem;
    }
  }
  .active {
    background-color: #112d4e;
    color: #f9f7f7;
    font-weight: bold;
  }
}
</style>
