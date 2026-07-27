import { type Directory } from "./types";
import { type RouteConfigEntry, route, index, prefix } from "@react-router/dev/routes";

export const isEmpty = (obj: Object) => {
    for (const prop in obj){
        if (Object.hasOwn(obj, prop)) return false;
    }

    return true
}

export const getFiles = () => {
    const excludes = ["root.tsx", "components/"]
    return Object.keys(import.meta.glob("../**/*.tsx")).filter(path => {
        return excludes.every(exclude => !path.includes(exclude))
    }).map(path => path.replaceAll("../", ""))
}

export const getRouteTree = () => {
    let tree: Directory = { files: [], directories: {} }
    let currentSegment = tree
    getFiles().forEach(path => {
        let segments = path.split("/")
        segments.forEach((segment, i) => {
            if (i == segments.length - 1){
                currentSegment.files.push({ name: segment, path: path })
                return
            }

            currentSegment.directories[segment] ??= { files: [], directories: {} }
            currentSegment = currentSegment.directories[segment]
        })

        currentSegment = tree;
    })

    return tree
}

export const constructRouteConfig = (routeTree: Directory, currDirName?: string): RouteConfigEntry[] => {
    let config: RouteConfigEntry[] = []
    Object.entries(routeTree.directories).forEach(([key, value]) => {
        config.push(...constructRouteConfig(value, key))
    })

    routeTree.files.forEach(file => {
        config.push(file.name.includes("index.tsx") ? index(file.path) : route(file.name.slice(0, -4), file.path))
    })

    return currDirName ? prefix(currDirName, config) : config
}
