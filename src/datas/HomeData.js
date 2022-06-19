export class HomeData{
    constructor(){
        // 名前
        this.name = {
            familyName:"知念",
            familyNameRubi:"ちねん",
            secondName:"英弥",
            secondNameRubi:"ひでや"
        }
        // 生年月日
        this.birthDay = {
            year :1999,
            month:5,
            date :22
        }
        //リンク
        this.linkList = [
            {
                icon :null,
                title:'Github',
                url  :'https://github.com/s19013/',
            },
        ]
        // 職歴,学歴
        this.careerList = [
            {
                year :2015,
                month:3,
                detail:"那覇市立小禄中学校 卒業"
            },
            {
                year :2015,
                month:4,
                detail:"沖縄県立那覇高等学校 入学"
            },
            {
                year :2018,
                month:3,
                detail:"沖縄県立那覇高等学校 卒業"
            },
            {
                year :2019,
                month:4,
                detail:"専門学校ITカレッジ沖縄 ITスペシャリスト科 入学"
            },
            {
                year :2022,
                month:3,
                detail:"専門学校ITカレッジ沖縄 ITスペシャリスト科 卒業"
            },
        ]
    }
}
