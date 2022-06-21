<template>
  <div>
    <table >
      <tr class="Heading">
        <th class="year"  >年</th>
        <th class="month" >月</th>
        <th class="detail">{{detailName}}</th>
      </tr>
      <tr v-for="(element,index) of list" :key="index">
        <th><p>{{element.year  }}</p></th>
        <th><p>{{element.month }}</p></th>
        <th><p>{{element.detail}}</p></th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HistoryComponent',
    data() {
      return {
        
      }
    },
    props:['detailName','list']
  }
</script>

<style lang="scss" scoped>
// @import "../../assets/scss/_mixin.scss";
// @include historyTable

table {
    width: 100%;
    border-spacing: 0;
    margin: 0 auto;
    .year {width :12%}
    .month{width :8%}
    .Heading{
      background-color: #3f72af;
      color: #f9f7f7;
      font-size: 1.4vw;
    }
    th, td {
      border: 1px solid #4f4d47;
      text-align: center;
      padding: 5px 0;
      p{
        font-size: 1.2vw;
        overflow-wrap: normal;
        font-weight: normal;
      }
    }
  }
@media  (min-width :951px) {
  table {
    width:95%
  }
}
</style>