<template>

<div>
  <div class="myName">
    <div class="familyName">
      <h5>{{name.familyNameRubi}}</h5>
      <h2>{{name.familyName    }}</h2>
    </div>
    <div class="secondName">
      <h5>{{name.secondNameRubi}}</h5>
      <h2>{{name.secondName    }}</h2>
    </div>
  </div>
</div>

</template>

<script>
  export default {
    name: 'NameComponent',
    data() {
      return {
        
      }
    },
    props:['name']
  }
</script>

<style lang="scss" scoped>
  .myName{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    gap: 1rem;
    .familyName{
      text-align: center;
      margin-left: auto;
    }
    .secondName{
      text-align: center;
      margin-right: auto;
    }
    h2{
      font-size:200%
    }
    h5{
      font-size:80%
    }
  }
</style>
