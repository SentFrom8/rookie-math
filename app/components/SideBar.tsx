import { useContext, useEffect, useRef, useState } from "react"
import { SidebarContext } from "~/utils/contexts"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SidebarProps extends React.ComponentProps<"aside"> {
    children: React.ReactNode
}

const SideBar = ({ children, ...props }: SidebarProps) => {
    const sidebarRef = useRef<HTMLElement | null>(null)
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)

    useEffect(() => {
        if (!sidebarRef.current) return

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSidebarOpen(false)
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (e.target && e.target instanceof Element){
                if (!e.target.closest("#sidebar")) setSidebarOpen(false)
            }
        }

        window.addEventListener("keydown", handleEsc)
        window.addEventListener("mousedown", handleClickOutside)

        
        return () => {
            window.removeEventListener("keydown", handleEsc)
            window.removeEventListener("mousedown", handleClickOutside)
        }
    }, [sidebarRef.current])

    return <aside id="sidebar" inert={!sidebarOpen} ref={sidebarRef} {...props} className={`absolute left-full ${sidebarOpen && "-translate-x-full"} top-0 h-full w-4/5 z-100 bg-(--menu-color-light) text-(--hard-text-dark) flex flex-col transition`}>
        <button className="p-2 self-end text-2xl" onClick={() => setSidebarOpen(false)}><FontAwesomeIcon icon={faX} /></button>
        {children}
    </aside>
}

export default SideBar
