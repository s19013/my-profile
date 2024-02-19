<template>
  <div class="FQA">
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
.FQA {
  background-color: #f5f5f5;
  .question {
    display: flex;
    margin: 10px 0;
    .btn {
      height: 40%;
    }
    .markQ {
      padding: 1px 5px;
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
    ul {
      padding-left: 1rem;
    }
    ol {
      padding-left: 1rem;
    }
    .markA {
      width: 22px;
      padding: 1px 5px;
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
