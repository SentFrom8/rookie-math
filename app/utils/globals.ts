import { getRouteTree, constructRouteConfig, getFiles } from "./functions"

export const Files = getFiles()

export const RouteTree = getRouteTree(Files)

export const Config = constructRouteConfig(RouteTree)
