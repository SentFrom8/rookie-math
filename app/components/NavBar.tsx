import { useLocation } from "react-router" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { useContext } from "react"
import { SidebarContext } from "~/utils/contexts"


const NavBar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    let location = useLocation()
    const sectionNum = (location.pathname.match(/\d+(?=-)/g) ?? []).join(".")
    let section = location.pathname.split("/").at(-1) || "Home"
    if (location.pathname.startsWith("/pages/")) section = section.split("-").slice(1).join(" ")

    return <nav className="w-full text-(--hard-text-dark) flex items-center justify-between bg-(--menu-color-medium) px-(--inline-padding-mobile) py-5 border-b-2 border-(--border-color-light) shadow-sm">
      <div className="capitalize flex flex-col text-(--hard-text-dark)">
        <span className="text-[#9C8B6E] text-sm">{sectionNum}</span>{section}
      </div>
          <button className="sidebar-control" disabled={sidebarOpen} onClick={() => setSidebarOpen(true)}>
            <FontAwesomeIcon className="text-3xl" icon={faBars} />
          </button>
      </nav>
}

export default NavBar
