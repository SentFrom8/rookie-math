import { useLocation } from "react-router"
import { Link } from "react-router"
import type { Categories } from "~/utils/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const BottomNav = ({ categories }: { categories: Categories }) => {
    //expensive computation, shouldn't happen on every re-render
    let location = useLocation();

    let paths: string[] = []
    let nodes = Object.entries(categories)

    while (nodes.length){
        let [_, {path, subcategories}] = nodes.pop()!
        paths.push(`/${path}`)
        nodes.push(...Object.entries(subcategories))
    }

    paths.sort()
    let index = paths.findIndex((path) => path === location.pathname)
    console.log(location.pathname, index)
    let prev: string | undefined, next: string | undefined
    if (index - 1 < 0) prev = undefined
    else {
        let segment = paths[index - 1].split('/').at(-1)!
        prev = segment.length ? segment.substring(segment.search('-') + 1).replace('-', " ") : "Home"
    }

    if (index + 1 >= paths.length) next = undefined
    else {
        let segment = paths[index + 1].split('/').at(-1)!
        next = segment.substring(segment.search('-') + 1).replace('-', " ")
    }

    console.log(prev, next)


    return <div className="bg-(--menu-color-light) flex items-center justify-evenly py-4 border-t-2 border-(--border-color-light) text-(--soft-text-light)">
        <div className="w-9/20">
            {prev && <Link className="w-full py-1 flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={paths[index - 1]}>
                <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
                {prev}
            </Link>}
        </div>
        <div className="w-9/20">
            {next && <Link className="w-full py-1 flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={paths[index + 1]}>
                {next}
                <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
            </Link>}
        </div>
    </div>
}

export default BottomNav
