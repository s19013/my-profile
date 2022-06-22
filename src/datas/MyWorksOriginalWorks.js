// class baseData{
//     constructor(imgUrl,title,codeUrl,workUrl,comment) {
//         this.imgUrl = imgUrl
//         this.title = title
//         this.codeUrl = codeUrl
//         this.workUrl = workUrl
//         this.comment = comment
//     }
// }
export class MyWorksOriginalWorks{
    constructor() {
        this.works = [
            {
                imgUrl:"originalWorks/knowledge-sharing-bord.png",
                title :"Knowledge Sharing Board",
                readmeUrl:"https://github.com/s19013/knowledge-sharing-board",
                codeUrl:"https://github.com/s19013/knowledge-sharing-board",
                workUrl:"http://knowledge-sharing-board.link/",
                comment:`
laravelの練習として作りました  
今後vueと組み合わせる予定です｡`,
            },
            {
                imgUrl:"originalWorks/gobblet.png",
                title :"ゴブレット",
                readmeUrl:"https://github.com/s19013/GraduationTasks",
                codeUrl:"https://github.com/s19013/GraduationTasks/tree/main/project/Gobblet5/app/src/main",
                workUrl:"https://play.google.com/store/apps/details?id=com.game.gobblet5&hl=ja&gl=US",
                comment:`
学校の卒業の制作物として作りました  
コンピューターのアルゴリズムを作りました
                `,
            },
            {
                imgUrl:"originalWorks/blackJack.png",
                title :"ブラックジャック",
                readmeUrl:"https://github.com/s19013/web-blackjack-vue",
                codeUrl:"https://github.com/s19013/web-blackjack-vue/src",
                workUrl:"https://s19013.github.io/web-blackjack-vue/",
                comment:`
vueの練習として作りました
                `,
            },
            {
                imgUrl:"originalWorks/my-profile.png",
                title :"自己紹介サイト",
                readmeUrl:"https://github.com/s19013/my-profile",
                codeUrl:"https://github.com/s19013/my-profile",
                workUrl:"https://s19013.github.io/web-blackjack-vue/src",
                comment:`
このサイトです｡  
vue Routerの練習と自己開示のためにつくりました
                `,
            },

        ]
    }
}