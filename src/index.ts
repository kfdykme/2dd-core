import Koa from "koa"
import { handleAction, buildActionFromUrl } from "./actionHandler"

const app = new Koa()

const filterUsefulApi = (url: string) => {
    if (url.endsWith(".ico")) {
        return false
    } else {
        console.info(url)
        return true
    }
}


app.use(async (ctx: any) => {
    const url = ctx.request.url
    let res:any = 'default'
    if (filterUsefulApi(url)) {
        res = handleAction(buildActionFromUrl(url))
    }

    console.info('res: ', res)
    ctx.body = res
})

console.info("START SERVER IN 3000")
app.listen(3000)
