<template>
  <div>
    <div class="birthDay">
      {{birthDay.year }}年
      {{birthDay.month}}月
      {{birthDay.date }}日
      {{age}}歳
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
  export default {
    name: 'DateOfBirthComponent',
    data() {
      return {
        today:dayjs()
      }
    },
    props:['birthDay'],
    computed:{
      age:function () { //年齢を計算する
        const dayjsBirthday = dayjs(`${this.birthDay.year}-${this.birthDay.month}-${this.birthDay.date}`)
        return this.today.diff(dayjsBirthday,'year')
      }
    }
  }
</script>

<style lang="scss" scoped>
.birthDay{
  text-align: center;
}
</style>
