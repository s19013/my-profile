<template>
  <div class="skillComponet">
    <div @click="flag = !flag">
      <h1>
        {{ skill.name }}
        <v-btn icon>
          <v-icon>{{ flag ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </h1>
    </div>

    <v-expand-transition>
      <div v-show="flag" v-html="markdownText"></div>
    </v-expand-transition>
  </div>
</template>

<script>
import { marked } from "marked";
marked.setOptions({
  breaks: true,
  gfm: true,
});
export default {
  name: "SkillComponent",
  data() {
    return {
      flag: false,
      markdownText: marked.parse(this.skill.detail),
    };
  },
  props: ["skill"],
};
</script>

<style lang="scss" scoped>
.skillComponet {
  margin-bottom: 1rem;
}
</style>
