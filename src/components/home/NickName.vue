<template>
  <div>
    <div class="myName">
      <p>ニックネーム</p>
      <h2>{{ nickName }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NickNameComponent",
  data() {
    return {};
  },
  props: ["nickName"],
};
</script>

<style lang="scss" scoped>
.myName {
  h2 {
    font-size: 4rem;
  }
}
</style>
