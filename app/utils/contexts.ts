import { createContext } from "react";

export const SidebarContext = createContext<{ sidebarOpen: boolean, setSidebarOpen: Function }>({ sidebarOpen: false,  setSidebarOpen: () => {} })
