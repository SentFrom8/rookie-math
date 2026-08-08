import { RouteTree } from "~/utils/globals"
import HamburgerMenu from "./HamburgerMenu"
import { useLocation } from "react-router" 

interface NavbarProps {
    menuAction: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const NavBar = ({ menuAction }: NavbarProps) => {
    let location = useLocation()
    console.log(RouteTree)
    const sectionNum = (location.pathname.match(/\d+(?=-)/g) ?? []).join(".")
    let section = location.pathname.split("/").at(-1) || "Home"
    if (location.pathname.startsWith("/pages/")) section = section.split("-").slice(1).join(" ")

    return <nav className="w-full flex items-center justify-between bg-(--menu-color-light) px-(--inline-padding-mobile) py-5 border-b-2 border-(--border-color-light) shadow-sm">
      <div className="capitalize flex flex-col">
        <span className="text-[#9C8B6E] text-sm">{sectionNum}</span>{section}
      </div>
      <HamburgerMenu className="w-7 h-5" onClick={ menuAction } />
    </nav>
}

export default NavBar
