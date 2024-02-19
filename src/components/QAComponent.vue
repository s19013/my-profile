<template>
  <div class="QA">
    <div @click="show = !show">
      <div class="question">
        <div class="markQ">Q</div>
        <p>{{ data.Q }}</p>
        <v-btn icon class="btn">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </div>
    </div>

    <v-expand-transition>
      <div v-show="show" class="answer">
        <div class="markA">A</div>
        <div class="answerBody" v-html="markdownText"></div>
      </div>
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
  name: "QAComponent",
  data() {
    return {
      show: false,
      markdownText: marked.parse(this.data.A),
    };
  },
  props: ["data"],
};
</script>

<style lang="scss">
.QA {
  background-color: #f5f5f5;
  .question {
    display: flex;
    padding: 0.5rem;
    .btn {
      height: 40%;
    }
    .markQ {
      padding: 0.1rem 0.4rem;
      width: 1.5rem;
      background-color: rgb(0, 191, 255);
      font-weight: bold;
      color: aliceblue;
    }
    p {
      padding: 0 0 0 10px;
      font-weight: 550;
    }
  }
  .answer {
    padding: 0.5rem;
    ul {
      padding-left: 1rem;
    }
    ol {
      padding-left: 1rem;
    }
    .markA {
      padding: 0.1rem 0.4rem;
      width: 1.5rem;
      background-color: rgb(255, 72, 0);
      font-weight: bold;
      color: aliceblue;
    }
    .answerBody {
      padding: 0.5rem 2rem;
    }
  }
}
</style>
