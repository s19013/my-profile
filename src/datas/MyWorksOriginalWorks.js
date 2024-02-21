import { baseWorkData } from "./baseWorkData";
export class MyWorksOriginalWorks{
    constructor() {
        this.pageTitle = "設計などから自分で考えた作品"
        this.works = [
            new baseWorkData({
                imgUrl:'originalWorks/Tetris.png',
                title :"Tetris",
                readmeUrl:"https://github.com/s19013/tetris-vue/blob/main/README.md",
                codeUrl:"https://github.com/s19013/tetris-vue",
                workUrl:"https://s19013.github.io/tetris-vue/",
                used:["vue.js","javascript","html","css"],
                comment:`
Tスピンなどでおかしな動きをするがとりあえず列を揃えたら消えるテトリス
                `
                }),
            new baseWorkData({
                imgUrl:null,
                title :"sundlf-bookmark-addon",
                readmeUrl:"https://github.com/s19013/sundlf-addon#readme",
                codeUrl:"https://github.com/s19013/sundlf-addon",
                workUrl:"https://chrome.google.com/webstore/detail/sundlf-bookmark-addon/mfcobcdpjbgnpbkhbbfaabkkphpceoka",
                used:["vue.js","javascript","html","css"],
                comment:`
sundlfをより便利にするために作ったアドオン
今開いているページを保存できる
                `
                }),
            new baseWorkData({
                imgUrl:"originalWorks/my-wiki.png",
                title :"sundlf",
                readmeUrl:"https://github.com/s19013/my-wiki#readme",
                codeUrl:"https://github.com/s19013/my-wiki",
                workUrl:"http://sundlf.com?utm_source=my-profile",
                used:["php","laravel","vue.js","javascript","html","css","aws","apach","mariaDB"],
                comment:`
laravelとvueの組み合わせの練習として作りました｡  
私自身がタグをつけられるブックマークがほしいと思い作りました｡  
[発表資料](https://docs.google.com/presentation/d/e/2PACX-1vRjNjWhfdN9ykD95Ru1eLCUQbBMRZL9sRkH1CB81XXpzMycUQcY8dcoJ8UAK7wlBNBPGWqAz5n3wYC4/pub?start=false&loop=false&delayms=3000)
### 名前の由来
sundry :雑多な  
 +
shelf  :本棚  
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/knowledge-sharing-bord.png",
                title :"Knowledge Sharing Board",
                readmeUrl:"https://github.com/s19013/knowledge-sharing-board#readme",
                codeUrl:"https://github.com/s19013/knowledge-sharing-board",
                workUrl:null,
                used:["php","laravel","javascript","html","css","aws","apach","mariaDB"],
                comment:`
laravelの練習として作りました  
[発表資料](https://docs.google.com/presentation/d/e/2PACX-1vTcFdwzqewHn7cVl-8MFKz8zTfPLaHjQlrhoJ40r9U-xL8dYW1DoHz0v8SkOTZ8EiVAB9VEaGhvj4jp/pub?start=false&loop=false&delayms=3000&slide=id.p)
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/gobblet.png",
                title :"ゴブレット",
                readmeUrl:"https://github.com/s19013/GraduationTasks#readme",
                codeUrl:"https://github.com/s19013/GraduationTasks/tree/main/project/Gobblet5/app/src/main",
                workUrl:"https://play.google.com/store/apps/details?id=com.game.gobblet5&hl=ja&gl=US",
                used:["kotlin","androidstudio"],
                comment:`
学校の卒業の制作物として作りました  
コンピューターを作ったみたかったのでコンピューターのアルゴリズムを作りました｡  
ストアに出品しました｡
[アルゴリズムのスライド](https://speakerdeck.com/s19013/goburetuto-fa-biao-suraido)
`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/blackJack.png",
                title :"ブラックジャック",
                readmeUrl:"https://github.com/s19013/web-blackjack-vue#readme",
                codeUrl:"https://github.com/s19013/web-blackjack-vue/",
                workUrl:"https://s19013.github.io/web-blackjack-vue/",
                used:["javascript","Vue.js","html","css"],
                comment:`
最初は生javascriptの練習としてつくりましたが､後にvueを学んだのでvueに置き換えました`
                }),
            new baseWorkData({
                imgUrl:"originalWorks/my-profile.png",
                title :"自己紹介サイト",
                readmeUrl:"https://github.com/s19013/my-profile#readme",
                codeUrl:"https://github.com/s19013/my-profile",
                workUrl:"https://s19013.github.io/my-profile/Home",
                used:["javascript","Vue.js","html","css"],
                comment:`
このサイトです｡  
vue Routerの練習と自己開示のため､カジュアル面談での話の種になればと思いつくりました`
                }),
        ]
    }
}