
/**
 * cursor service
 */
export class CursorService {
    currentCursorX = 0
    currentCursorY = 0

    static instance?:CursorService

    static Get = ():CursorService => {
        if (CursorService.instance === undefined) {
            CursorService.instance = new CursorService()
        }
        return CursorService.instance!!
    }

    up = () => {
        this.currentCursorY > 0 && this.currentCursorY--
        return this.build()
    }

    right = () => {
        this.currentCursorX < Number.MAX_SAFE_INTEGER && this.currentCursorX++
        return this.build()
    }

    down = () => {
        this.currentCursorY < Number.MAX_SAFE_INTEGER && this.currentCursorY++
        return this.build()
    }

    left = () => {
        this.currentCursorX > 0 && this.currentCursorX--
        return this.build()
    }

    build = (): any => {
        return { x: this.currentCursorX, y: this.currentCursorY }
    }
}
