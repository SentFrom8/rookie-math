import { type File, type FSNode, type Directory, type PageSummary } from "./types";
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

export const getRouteTree = (files: string[]) => {
    let root: FSNode = { type: "Directory", name: "", fsPath: "", children: [] }
    let currentNode: Directory = root

    files.forEach(path => {
        let segments = path.split("/")
        segments.forEach(segment => {
            if (segment === "index.tsx"){
                currentNode.index = {
                    type: "File",
                    name: "index",
                    extension: ".tsx",
                    fsPath: path,
                    route: currentNode.fsPath
                }
            }
            else if (segment.endsWith(".tsx")){
                const fileName = segment.slice(0, -4)
                currentNode.children.push({
                    type: "File",
                    name: fileName,
                    extension: ".tsx",
                    fsPath: path,
                    route: `${currentNode.fsPath}/${fileName}`
                } as File)
            }
            else {
                let child = currentNode.children.find(node => node.type === "Directory" && node.name === segment) as Directory | undefined
                if (!child){
                    child = {
                        type: "Directory",
                        name: segment,
                        fsPath: `${currentNode.fsPath}/${segment}`,
                        children: []
                    }
                    currentNode.children.push(child)
                }

                currentNode = child
            }
        })
        
        currentNode.children.sort((a, b) => a.name.localeCompare(b.name))
        currentNode = root;
    })

    return root
}

export const constructRouteConfig = (root: Directory) => {
    let config: RouteConfigEntry[] = []

    const handleDirectory = (dir: Directory, config: RouteConfigEntry[]) => {
        if (dir.index) config.push(route(dir.fsPath, dir.index.fsPath))

        dir.children.forEach(child => {
            switch (child.type){
                case "File":
                    config.push(route(child.route, child.fsPath))
                    break
                case "Directory":
                    handleDirectory(child, config)
                    break
            }
        })

    }

    handleDirectory(root, config)

    
    return config
}

export function* routeTreeGenerator(root: Directory): Generator<FSNode, void, unknown> {
    yield root

    for (const node of root.children){
        switch (node.type){
            case "File":
                yield node
                break
            case "Directory":
                for (const child of routeTreeGenerator(node)) yield child
                break
        }
    }
}

export function* pageSummaryGenerator(root: Directory): Generator<PageSummary, void, unknown> {

    for (const node of routeTreeGenerator(root)){
        switch (node.type){
            case "File":
                yield { name: node.name, route: node.route }
                break
            case "Directory":
                if (!node.index) continue

                yield { name: node.name, route: node.index.route }
                break
        }
    }
}
