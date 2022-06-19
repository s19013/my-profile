<template>
  <div>
    <table >
      <tr class="Heading"><th>年</th> <th>月</th> <th>学歴 職歴</th></tr>
      <tr v-for="(career,index) of careerList" :key="index">
        <th>{{career.year}}</th>
        <th>{{career.month}}</th>
        <th>{{career.detail}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CareerComponent',
    data() {
      return {
        
      }
    },
    props:['careerList']
  }
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    border-spacing: 0;
    .Heading{
      background-color: #3f72af;
      color: #f9f7f7;
    }
    th, td {
      border: 1px solid #4f4d47;
      text-align: center;
      padding: 2vmin;
    }
  }

</style>
