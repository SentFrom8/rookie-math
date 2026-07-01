import HamburgerMenu from "./HamburgerMenu"
import { useLocation } from "react-router" 

interface NavbarProps {
    path: string
    menuAction: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const NavBar = ({ menuAction }: NavbarProps) => {
    let location = useLocation()
    let isChapter = /^(?:\/\d+-[^/]+)+$/.test(location.pathname)
    let pathSegments = location.pathname.split('/').filter((segment) => segment)
    let chapterNum = isChapter ? pathSegments.reduce((acc, curr) => acc + curr.split('-')[0] + '.', "") : undefined
    let pageTitle: string
    if (pathSegments.length){
        if (isChapter){
            let firstDash = pathSegments.at(-1)!.search('-')
            pageTitle = pathSegments.at(-1)!.substring(firstDash + 1).replaceAll('-', ' ')
        } else pageTitle = pathSegments.at(-1)!
    } else pageTitle = "Home"

    

    return <nav className="w-full flex items-center justify-between bg-(--menu-color-light) px-(--inline-padding-mobile) py-5 border-b-2 border-(--border-color-light) shadow-md">
      <div className="capitalize flex flex-col">
        {chapterNum && <span className="text-[#9C8B6E] text-sm">{chapterNum.slice(0, -1)}</span>}{pageTitle}
      </div>
      <HamburgerMenu className="w-7 h-5" onClick={ menuAction }/>
    </nav>
}

export default NavBar
