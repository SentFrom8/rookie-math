import * as z from "zod"

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

export const SuggestionSchema = z.array(z.object({
    type: z.union([z.literal("bug"), z.literal("correction"), z.literal("comment")]),
    email: z.preprocess((email: string) => email ? email : undefined, z.email().optional()),
    description: z.string()
}))
