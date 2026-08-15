import { useContext, useEffect, useRef, useState } from "react"
import { SidebarContext } from "~/utils/contexts"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SidebarProps extends React.ComponentProps<"aside"> {
    children: React.ReactNode
}

const Sidebar = ({ children, ...props }: SidebarProps) => {
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
    const sidebarRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSidebarOpen(false)
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (e.target && e.target instanceof Element){
                if (!e.target.closest("#sidebar") && !e.target.closest(".sidebar-control")) setSidebarOpen(false)
            }
        }

        window.addEventListener("keydown", handleEscape)
        window.addEventListener("click", handleClickOutside)

        return () => {
            window.removeEventListener("keydown", handleEscape)
            window.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return <aside id="sidebar" ref={sidebarRef} {...props} className={`absolute left-full top-0 h-full overflow-scroll w-4/5 border-l-1 border-(--soft-lines) z-100 bg-(--menu-color-light) text-(--hard-text-dark) ${sidebarOpen ? "flex -translate-x-full" : "hidden"} flex-col transition transition-discrete`}>
        <div className="px-(--inline-padding-mobile) w-full flex justify-between items-center border-b-1 border-(--soft-lines)">
            <span className="italic">Content</span>
            <button className="py-2 text-2xl cursor-pointer" onClick={() => setSidebarOpen(false)}><FontAwesomeIcon icon={faX} /></button>
        </div>
        
        {children}
    </aside>
}

export default Sidebar
