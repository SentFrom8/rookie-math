interface SideBarProps extends React.ComponentProps<"aside"> {
    sidebarOpen: boolean
    children: React.ReactNode
}

const SideBar = ({sidebarOpen, children, className, ...props}: SideBarProps) => {
    return <aside {...props} className={`absolute left-full ${sidebarOpen && "-translate-x-full"} top-0 h-full w-4/5 bg-(--menu-color-light) transition ` + className}>
        {children}
    </aside>
}

export default SideBar
