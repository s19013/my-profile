export class HomeData{
    constructor(){
        // 名前
        this.nickName = "ヒデ"
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
            {
                icon :null,
                title:'qiita',
                url  :'https://qiita.com/hideya670',
            },
            {
                icon :null,
                title:'connpass',
                url  :'https://connpass.com/user/hideya0522/',
            },
        ]
        this.qualificationList = [
            {
                year  :2019,
                month :9,
                detail:"SEA/J Certified Security Basic Master"
            },
            {
                year  :2020,
                month :6,
                detail:"サーティファイ javaプログラミング能力認定試験 3級"
            },
            {
                year  :2020,
                month :9,
                detail:"CompTIA IT Fundamentals"
            },
            {
                year  :2021,
                month :8,
                detail:"Oracle Certified Java Programmer, Bronze SE"
            },
            {
                year  :2022,
                month :2,
                detail:"Oracle  Master Bronze 12c SQL基礎"
            },
        ]
    }
}
