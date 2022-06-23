export class baseWorkData{
    constructor(
            {
                imgUrl  = null,
                title   = null,
                codeUrl = null,
                workUrl = null,
                comment = null,
                readmeUrl = null,
            }
        )
    {
        this.imgUrl  = imgUrl
        this.title   = title
        this.codeUrl = codeUrl
        this.workUrl = workUrl
        this.readmeUrl = readmeUrl
        this.comment = comment
    }
}
