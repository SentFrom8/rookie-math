import { useFetcher } from "react-router"

const Suggestions = () => {
    let fetcher = useFetcher()

    return <div className="page">
        <fetcher.Form method="post" action="/suggestion-handler" className="bg-(--menu-color-medium) py-7 px-3 rounded-xl shadow-md flex flex-col gap-6 relative border-1 border-(--soft-lines)">
            <div className="flex flex-col">
                <label htmlFor="type" className="text-sm">What are you reporting?</label>
                <select className="bg-white rounded p-1" id="type" name="type">
                    <option value="bug">Bug</option>
                    <option value="correction">Correction</option>
                    <option value="comment">Comment</option>
                </select>
            </div>
            
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm">Contact email:</label>
                <input className="bg-white rounded p-1" type="email" id="email" name="email" placeholder="Email: " autoComplete="email" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="description" className="text-sm">Description:</label>
                <textarea required className="bg-white rounded h-64 p-1" id="description" name="description" placeholder="Write a short description of your issue/suggestion. If you're reporting a bug, try to include steps for reproduction. Thanks :)" />
            </div> 
            <button type="submit" className="bg-(--accent) text-white rounded-lg self-center py-2 px-16">{fetcher.state === "idle" ? "Send" : "Sending..."}</button>
            {fetcher.data?.error && <div className="text-sm text-red-500 absolute bottom-1 left-1/2 -translate-x-1/2">Submission failed</div>}
        </fetcher.Form>
    </div>
}

export default Suggestions
