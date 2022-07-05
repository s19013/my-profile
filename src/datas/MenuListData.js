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
        this.AppListFontSize = "2vw"
        //-----------------------------
        this.MyWorksList = [
            {
                to   :"Original",
                title:"オリジナル"
            },
            {
                to   :"Samples",
                title:"サンプル"
            }
        ]
        this.MyWorksListFontSize = "1.4vw"
    }
}