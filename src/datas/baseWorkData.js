export class baseWorkData{
    constructor(
        imgUrl  = null,
        title   = null,
        codeUrl = null,
        workUrl = null,
        comment = null,
        readmeUrl = null,
        )
    {
        this.imgUrl  = imgUrl
        this.title   = title
        this.codeUrl = codeUrl
        this.workUrl = workUrl
        this.comment = comment
        this.readmeUrl = readmeUrl
    }

    returnObject(){
        return [
            this.imgUrl,
            this.title,
            this.codeUrl,
            this.workUrl,
            this.comment,
            this.readmeUrl,
        ]
    }
}
// constructor()
//     {
//         this.imgUrl  = null
//         this.title   = null
//         this.codeUrl = null
//         this.workUrl = null
//         this.readmeUrl = null
//         this.comment = null
//     }
//     cons({
//         imgUrl  = null,
//         title   = null,
//         codeUrl = null,
//         workUrl = null,
//         readmeUrl = null,
//         comment = null
//     }) {
//         this.imgUrl  = imgUrl
//         this.title   = title
//         this.codeUrl = codeUrl
//         this.workUrl = workUrl
//         this.readmeUrl = readmeUrl
//         this.comment = comment
//     }