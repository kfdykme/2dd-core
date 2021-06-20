import { CursorService } from "./servive/cursorService"

const buildActionFromUrl = (url: string) => {
    return url.replace(/^\//, "")
}
const handleAction = (url: string) => {
    console.info("handleAction", url)
    const res = createAction(url)

    if (res.name === 'move') {

    } else if (res.name === 'cursor') {
        const curService = CursorService.Get() as any

        const func = curService[res.data.action]   

        console.info(func())
    }

    return `handleAction ${JSON.stringify(res)}`
}

// class Data {
//     x: Number = 0
//     y: Number = 0
// }

class Action {
    name:string
    data: any = {}
}

const createAction = (url:string):Action => {
    console.info('createAction', url)
    const [name, others] = url.split('?')
    let res = new Action()
    res.name = name
    
    if (others !== undefined) {
        const params = others.split('&')
        params.forEach((p:string) => {
            const [key, value] = p.split('=')
            res.data[key] = value
        })
    }

    console.info('createAction', res)

    

    return res
}

export {
    buildActionFromUrl,
    handleAction
}