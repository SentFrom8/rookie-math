import { useLocation } from "react-router"
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { RouteTree } from "~/utils/globals"
import { pageSummaryGenerator } from "~/utils/functions"
import type { Directory } from "~/utils/types"

const BottomNav = () => {
    let location = useLocation();
    if (!location.pathname.startsWith("/pages/")) return null

    const pages = RouteTree.children.find(node => node.type === "Directory" && node.name === "pages") as Directory | undefined
    if (!pages) return null

    const summaries = [...pageSummaryGenerator(pages)]
    const index = summaries.findIndex(summary => summary.route === location.pathname)

    if (index === -1) return null

    const prev = summaries[index - 1]
    const next = summaries[index + 1]


    return <div className="bg-(--menu-color-medium) flex items-center justify-evenly py-4 border-t-2 border-(--border-color-light) text-(--soft-text-light)">    
        <div className="w-9/20">
            {prev && <Link className="w-full px-2 py-1 text-center text-(--hard-text-dark) flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={prev.route}>
                <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
                {prev.name.split("-").slice(1).join(" ")}
            </Link>}
        </div>
        <div className="w-9/20">
            {next && <Link className="w-full px-2 py-1 text-center text-(--hard-text-dark) flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={next.route}>
                {next.name.split("-").slice(1).join(" ")}
                <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
            </Link>}
        </div>
    </div>
}

export default BottomNav
