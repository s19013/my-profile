<!-- リンクをforをつかってまとめて表示 -->
<template>
  <div>
    <ul>
      <li v-for="link of linkList" :key="link.title" >
        <a :href="link.url">
          <p>{{link.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'LinkComponent',
    data() {
      return {
        
      }
    },
    props:['linkList']
  }
</script>

<style lang="scss" scoped>
  li{list-style-type: none;}
</style>
