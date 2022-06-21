<template>
  <div>
    <p>生年月日</p>
    <div class="birthDay">
      <p>
        {{birthDay.year }}年
        {{birthDay.month}}月
        {{birthDay.date }}日
        {{age}}歳
      </p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
  export default {
    name: 'DateOfBirthComponent',
    data() {
      return {
        today:dayjs() //今日の日付
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
  // text-align: center;
  p{
    font-size:150%;
    margin: 5px 1vw;
  }
}

</style>
