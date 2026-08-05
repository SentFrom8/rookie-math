export type File = {
    type: "File"
    name: string
    extension: string
    fsPath: string
    route: string
}

export type Directory = {
    type: "Directory"
    name: string
    fsPath: string
    index?: File
    children: FSNode[]
}

export type FSNode = File | Directory

export type PageSummary = {
    name: string
    route: string
}
