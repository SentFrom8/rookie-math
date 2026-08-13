import { useContext, useEffect, useRef, useState } from "react"
import { SidebarContext } from "~/utils/contexts"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SidebarProps extends React.ComponentProps<"aside"> {
    children: React.ReactNode
}

const SideBar = ({ children, ...props }: SidebarProps) => {
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

    return <aside id="sidebar" ref={sidebarRef} {...props} className={`absolute left-full top-0 h-full w-4/5 z-100 bg-(--menu-color-light) text-(--hard-text-dark) ${sidebarOpen ? "flex -translate-x-full" : "hidden"} flex-col transition transition-discrete`}>
        <button className="p-2 self-end text-2xl" onClick={() => setSidebarOpen(false)}><FontAwesomeIcon icon={faX} /></button>
        {children}
    </aside>
}

export default SideBar
