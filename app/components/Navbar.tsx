import { useLocation } from "react-router" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { useContext } from "react"
import { SidebarContext } from "~/utils/contexts"


const Navbar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    let location = useLocation()
    const sectionNum = (location.pathname.match(/\d+(?=-)/g) ?? []).join(".")
    let section = location.pathname.split("/").at(-1) || "Home"
    if (location.pathname.startsWith("/pages/")) section = section.split("-").slice(1).join(" ")

    return <nav className="w-full text-(--hard-text-dark) flex items-center justify-between bg-(--menu-color-medium) px-(--inline-padding-mobile) py-5 border-b-2 border-(--border-color-light) shadow-sm">
      <div className="capitalize flex flex-col text-(--hard-text-dark)">
        <span className="text-(--soft-lines) text-sm">{sectionNum}</span>{section}
      </div>
          <button className="sidebar-control cursor-pointer" disabled={sidebarOpen} onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon className="text-3xl" icon={faBars} />
          </button>
      </nav>
}

export default Navbar
