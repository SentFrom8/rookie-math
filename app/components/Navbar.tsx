import { useLocation } from "react-router" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { useContext } from "react"
import { SidebarContext } from "~/utils/contexts"
import { Link } from "react-router"


const Navbar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    let location = useLocation()
    const sectionNum = (location.pathname.match(/\d+(?=-)/g) ?? []).join(".")
    let section = location.pathname.split("/").at(-1) || "Home"
    if (location.pathname.startsWith("/pages/")) section = section.split("-").slice(1).join(" ")

    return <nav className="w-full h-(--navbar-height) flex items-center justify-center text-(--hard-text-dark) bg-(--menu-color-medium) px-(--inline-padding-sm) sm:px-0 border-b-2 border-(--border-color-light) shadow-sm">
    <div className="w-full flex items-center justify-between max-w-(--width-sm) md:max-w-(--width-lg) 2xl:max-w-(--width-xl) relative">
       <div className="capitalize flex flex-col text-(--hard-text-dark)">
           <span className="text-(--soft-lines) text-sm">{sectionNum || "Current page"}</span>
           <h3 className="italic">{section}</h3>
       </div>
       <button className="sidebar-control cursor-pointer xl:hidden" disabled={sidebarOpen} onClick={() => setSidebarOpen(true)}>
           <FontAwesomeIcon className="text-3xl" icon={faBars} />
       </button>
       <Link to="/" className="hidden xl:inline text-xl font-bold absolute left-1/2 top-1/2 -translate-1/2"><h1>RookieMath</h1></Link>
       <Link to="/suggestions" className="hidden xl:inline hover:text-(--soft-lines)">Give Feedback</Link>
    </div>
</nav>
}

export default Navbar
