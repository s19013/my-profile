import { baseWorkData } from "./baseWorkData";
export class MyWorksOriginalWorks{
    constructor() {
        this.works = [
            new baseWorkData({
                imgUrl:"originalWorks/my-wiki.png",
                title :"my-wiki,my-bookmark",
                readmeUrl:"https://github.com/s19013/my-wiki",
                codeUrl:"https://github.com/s19013/my-wiki",
                workUrl:"http://35.230.90.39",
                used:["php","laravel","vue.js","javascript","html","css","gcp","apach","mariaDB"],
                comment:`
laravelとvueの組み合わせの練習として作りました｡  
私自身がタグをつけられるブックマークがほしいと思い作りました｡  
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/knowledge-sharing-bord.png",
                title :"Knowledge Sharing Board",
                readmeUrl:"https://github.com/s19013/knowledge-sharing-board",
                codeUrl:"https://github.com/s19013/knowledge-sharing-board",
                workUrl:"http://knowledge-sharing-board.link/",
                used:["php","laravel","javascript","html","css","aws","apach","mariaDB"],
                comment:`
laravelの練習として作りました  
今後vueと組み合わせる予定です｡  
[発表資料](https://docs.google.com/presentation/d/e/2PACX-1vTcFdwzqewHn7cVl-8MFKz8zTfPLaHjQlrhoJ40r9U-xL8dYW1DoHz0v8SkOTZ8EiVAB9VEaGhvj4jp/pub?start=false&loop=false&delayms=3000&slide=id.p)
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/gobblet.png",
                title :"ゴブレット",
                readmeUrl:"https://github.com/s19013/GraduationTasks",
                codeUrl:"https://github.com/s19013/GraduationTasks/tree/main/project/Gobblet5/app/src/main",
                workUrl:"https://play.google.com/store/apps/details?id=com.game.gobblet5&hl=ja&gl=US",
                used:["kotlin","androidstudio"],
                comment:`
学校の卒業の制作物として作りました  
コンピューターを作ったみたかったのでコンピューターのアルゴリズムを作りました｡  
[アルゴリズムのスライド](https://speakerdeck.com/s19013/goburetuto-fa-biao-suraido)
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/blackJack.png",
                title :"ブラックジャック",
                readmeUrl:"https://github.com/s19013/web-blackjack-vue",
                codeUrl:"https://github.com/s19013/web-blackjack-vue/",
                workUrl:"https://s19013.github.io/web-blackjack-vue/",
                used:["javascript","Vue.js","html","css"],
                comment:`
vueの練習として作りました`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/my-profile.png",
                title :"自己紹介サイト",
                readmeUrl:"https://github.com/s19013/my-profile",
                codeUrl:"https://github.com/s19013/my-profile",
                workUrl:"https://s19013.github.io/my-profile/Home",
                used:["javascript","Vue.js","html","css"],
                comment:`
このサイトです｡  
vue Routerの練習と自己開示のためにつくりました`
                }),
        ]
    }
}