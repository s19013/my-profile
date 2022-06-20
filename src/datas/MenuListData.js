export class MenuListData{
    constructor() {
        this.AppList = [
            {
                to   :"/",
                title:"基本情報"
            },
            {
                to   :"/MyWorks/Original",
                title:"作品"
            },
            {
                to   :"/FQA",
                title:"よくある質問"
            },
            {
                to   :"/Hobby",
                title:"趣味"
            }
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
        this.MyWorksListFontSize = "1vw"
    }
}