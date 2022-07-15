import { baseWorkData } from "./baseWorkData";
export class MyWorksSampleWorks{
    constructor() {
        this.works = [
            new baseWorkData({
                title:"ECsiteDemo",
                codeUrl:"https://github.com/s19013/ECSiteDemo",
                used:["javascript","php","html","css"],
                comment:`
[気づけばプロ並みPHP 改訂版]に従い制作  
phpのフルスクラッチ`
            }),
            new baseWorkData({
                title:"laravel-simple-memo",
                codeUrl:"https://github.com/s19013/laravel-simple-memo",
                used:["javascript","php","laravel","html","css"],
                comment:`
udemyの講座に従いつくりました｡  
`
            }),
            new baseWorkData({
                title:"api-test2",
                codeUrl:"https://github.com/s19013/api-test2",
                used:["php","laravel"],
                comment:`
自作apiの練習として作りました
`
            }),
            new baseWorkData({
                title:"api-sample-sanctum",
                codeUrl:"https://github.com/s19013/api-sample-sanctum",
                used:["php","laravel"],
                comment:`
認証付きapiを作ってみたかったのでサンプルを真似しました
`
            }),
            new baseWorkData({
                title:"vue-laravel-spa-sample",
                codeUrl:"https://github.com/s19013/vue-laravel-spa-sample",
                used:["php","laravel","vue.js","javascript"],
                comment:`
api通信をするspaを作ってみたかったのでサンプルを真似しました｡
viteを使ってビルドすることを強制させられたのでviteのことを調べたりするのが大変でした
`
            }),
            new baseWorkData({
                title:"vuex-sample",
                codeUrl:"https://github.com/s19013/vuex-sample",
                used:["vue.js","javascript"],
                comment:`
vuexを使って見たかったのでサンプルを真似しました
`
            }),
            new baseWorkData({
                title:"vue-todo",
                codeUrl:"https://github.com/s19013/vue-todo2",
                workUrl:"https://s19013.github.io/vue-todo2/",
                used:["javascript","Vue.js","html","css"],
                comment:`
udemyの講座に従いつくりました｡  
保存機能はついていません  
検索機能あり`
            }),
            new baseWorkData({
                title:"vue-carousel-sample",
                codeUrl:"https://github.com/s19013/vue-carousel-sample",
                workUrl:"https://s19013.github.io/vue-carousel-sample/",
                used:["javascript","Vue.js","html","css"],
                comment:`
udemyの講座に従いつくりました｡  
スライドショー  
一定時間ごとに自動的に次の画像へ動く機能あり
`
            }),
            new baseWorkData({
                title:"dogApi-vue",
                codeUrl:"https://github.com/s19013/dogApi-vue",
                workUrl:"https://s19013.github.io/dogApi-vue/",
                used:["javascript","Vue.js","html","css"],
                comment:`
udemyの講座に従いつくりました｡  
選んだ犬の画像を表示します
                `
            }),
            new baseWorkData({
                title:"vue-modal-sample",
                codeUrl:"https://github.com/s19013/vue-modal-sample",
                workUrl:"https://s19013.github.io/vue-modal-sample/",
                used:["javascript","Vue.js","html","css"],
                comment:`
udemyの講座に従いつくりました｡  
画像をクリックすると画像が大きくなります
`
            }),
        ]
    }

}