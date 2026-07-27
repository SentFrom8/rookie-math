import { useLocation } from "react-router"
import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { RouteList } from "~/utils/globals"

const BottomNav = () => {
    let location = useLocation();

    const sortedRoutes = [...RouteList].sort()
    const currentIndex = sortedRoutes.findIndex(file => file === location.pathname.slice(1))
    const prev = currentIndex > 0 ? sortedRoutes[currentIndex - 1] : undefined
    const next = currentIndex < sortedRoutes.length - 1 ? sortedRoutes[currentIndex + 1] : undefined

    return <div className="bg-(--menu-color-light) flex items-center justify-evenly py-4 border-t-2 border-(--border-color-light) text-(--soft-text-light)">
        <div className="w-9/20">
            {prev !== undefined && <Link className="w-full py-1 flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={prev}>
                <FontAwesomeIcon className="text-xs" icon={faArrowLeft} />
                {prev.split("/").filter(segment => segment).at(-1)?.split("-").slice(1).join(" ") ?? "Home"}
            </Link>}
        </div>
        <div className="w-9/20">
            {next !== undefined && <Link className="w-full py-1 flex justify-center items-center gap-2 border border-(--border-color-light) rounded-md capitalize" to={next}>
                {next.split("/").filter(segment => segment).at(-1)?.split("-").slice(1).join(" ")}
                <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
            </Link>}
        </div>
    </div>
}

export default BottomNav
