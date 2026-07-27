import { getRouteTree, constructRouteConfig, getFiles } from "./functions"

export const Files = getFiles()

export const RouteTree = getRouteTree()

export const Config = constructRouteConfig(RouteTree)

export const RouteList = Files.map(file => file.slice(0, -4).replace("index", ""))
