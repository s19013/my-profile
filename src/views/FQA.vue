<template>
  <div>
    <div v-for="(element,index) of QA.list" :key="index">
      <q-a-component :data= element></q-a-component>
    </div>
  </div>
</template>

<script>
import { QAData } from '@/datas/QAData'
import QAComponent from '@/components/QAComponent.vue'
  export default {
    name: 'FQAView',
    components:{
      QAComponent
    },
    data() {
      return {
        QA:new QAData
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
