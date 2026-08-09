import { RouteTree } from "~/utils/globals"
import HamburgerMenu from "./HamburgerMenu"
import { useLocation } from "react-router" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"

interface NavbarProps {
    menuAction: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const NavBar = ({ menuAction }: NavbarProps) => {
    let location = useLocation()
    const sectionNum = (location.pathname.match(/\d+(?=-)/g) ?? []).join(".")
    let section = location.pathname.split("/").at(-1) || "Home"
    if (location.pathname.startsWith("/pages/")) section = section.split("-").slice(1).join(" ")

    return <nav className="w-full text-(--hard-text-dark) flex items-center justify-between bg-(--menu-color-medium) px-(--inline-padding-mobile) py-5 border-b-2 border-(--border-color-light) shadow-sm">
      <div className="capitalize flex flex-col text-(--hard-text-dark)">
        <span className="text-[#9C8B6E] text-sm">{sectionNum}</span>{section}
      </div>
      <FontAwesomeIcon className="text-3xl" icon={faBars} onClick={menuAction} />
    </nav>
}

export default NavBar
