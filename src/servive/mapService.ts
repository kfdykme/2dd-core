
interface IMapConfigData {
    maxX: Number
    maxY: Number
}

enum MapFront {
    Grass,
    Forest,
}

interface IMapBaseItemData {
    x: Number
    y: Number
    front: MapFront,
    unit?: any
}


/**
 * MapService
 */
export class MapService {

    currentMap:IMapBaseItemData[][] = [[]]

    static Get = () => {
        return new MapService()
    }


    buildMap = (config: IMapConfigData = {
        maxX: 15,
        maxY: 15
    }) => {
        for (let x = 0; x < config.maxX; x++) {
            let row:IMapBaseItemData[] = []
            for (let y = 0; y < config.maxY; y++) {
                row.push({
                    x,y, front: MapFront.Grass
                })
            }
            this.currentMap.push(row)
        }
    }

    getMap = ({
        x = 0,
        y = 0
    }):IMapBaseItemData => {
        return this.currentMap[x][y]
    }
}