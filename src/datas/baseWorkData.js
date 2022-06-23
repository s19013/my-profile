export class baseWorkData{
    constructor(
            {
                imgUrl  = null,
                title   = null,
                codeUrl = null,
                workUrl = null,
                readmeUrl = null,
                used    = null,
                comment = null,
            }
        )
    {
        this.imgUrl  = imgUrl
        this.title   = title
        this.codeUrl = codeUrl
        this.workUrl = workUrl
        this.readmeUrl = readmeUrl
        this.used    = used
        this.comment = comment
    }
}
