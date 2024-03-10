<template>
  <div class="skills">
    <template v-for="skill of skills">
      <skill-component :skill="skill" :key="skill.name"></skill-component>
    </template>
  </div>
</template>

<script>
import SkillComponent from "../components/SkillComponent.vue";

import { SkillData } from "../datas/SkillData.js";
export default {
  name: "SkillView",
  components: {
    SkillComponent,
  },
  data() {
    return {
      skills: new SkillData().skills,
    };
  },
};
</script>

<style lang="scss" scoped></style>
