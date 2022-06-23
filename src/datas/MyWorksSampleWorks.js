import { baseWorkData } from "./baseWorkData";
export class MyWorksSampleWorks{
    constructor() {
        this.works = [
            new baseWorkData(
                {
                    title:"vue-todo",
                    codeUrl:"https://github.com/s19013/vue-todo2",
                    workUrl:"https://s19013.github.io/vue-todo2/",
                    comment:"保存機能はついていません",
                }
            ),
            new baseWorkData(
                {
                    title:"vue-carousel-sample",
                    workUrl:"https://s19013.github.io/vue-carousel-sample/",
                    comment:`
スライドショー
                    `,
                }
            ),
        ]
    }

}