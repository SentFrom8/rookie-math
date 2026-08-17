import type { Route } from "./+types/suggestion-handler";
import { constants } from "node:fs";
import { open } from "node:fs/promises"
import { SuggestionSchema } from "./utils/types";
import { data } from "react-router";

export async function action(args: Route.ActionArgs){
    let formData = await args.request.formData()
    const suggestionsFile = await open("./suggestions.json", constants.O_RDWR | constants.O_CREAT, 0o664)
    try {
        const suggestionsBuffer = await suggestionsFile.readFile()
        let parsedSuggestions = SuggestionSchema.parse(JSON.parse(suggestionsBuffer.toString() || "[]"))
        const formSuggestion = SuggestionSchema.unwrap().parse(Object.fromEntries(formData.entries()))
        parsedSuggestions.push(formSuggestion)
        await suggestionsFile.write(JSON.stringify(parsedSuggestions, undefined, 4), 0)
        return new Response(null, {status: 200})
    } catch (e) {
        console.log(e)
        return data({ error: true }, {status: 400})
    } finally {
        suggestionsFile.close()
    }
}
