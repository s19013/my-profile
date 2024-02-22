export class MenuListData{
    constructor() {
        this.AppList = [
            {
                to   :"/Home",
                title:"基本情報",
                icon :"fa-solid fa-address-card",
            },
            {
                to   :"/MyWorks",
                title:"作品",
                icon :"fa-solid fa-code",
            },
            {
                to   :"/FQA",
                title:"質問集",
                icon :"fa-solid fa-circle-question",
                activeicon:"fa-solid fa-circle-question"
            },
            // {
            //     to   :"/Hobby",
            //     title:"趣味",
            //     icon :"fa-gamepad",
            // }
        ]
    }
}