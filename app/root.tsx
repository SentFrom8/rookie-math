import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useState } from "react";
import { Link } from "react-router";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import ContentTree from "./components/ContentTree";
import BottomNav from "./components/BottomNav"
import { RouteTree } from "./utils/globals";
import type { Directory } from "./utils/types";
import { SidebarContext } from "./utils/contexts";
import { useLocation } from "react-router";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let location = useLocation()
  const pages = RouteTree.children.find(node => node.type == "Directory" && node.name == "pages") as Directory | undefined

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <SidebarContext value={{ sidebarOpen, setSidebarOpen }}>
          <body className="h-svh flex flex-col overflow-hidden">
            <header className="sticky top-0 z-100 relative">
                <Navbar />
            </header>

            <div className="w-full flex-1 overflow-hidden flex justify-center">
                <main className="h-full w-full overflow-auto px-(--inline-padding-sm) max-w-(--width-sm) md:max-w-(--width-lg) 2xl:max-w-(--width-xl) shadow-lg relative flex flex-col gap-6 text-(--hard-text-dark)">
                    {children}
                </main>

                 <Sidebar>
                    <Link to="/" className={`xl:hidden pl-(--inline-padding-sm) py-2 ${location.pathname === "/" ? "bg-(--menu-color-medium) border-l-4 border-(--accent)" : ""}`}>Home</Link>
                    <Link to="/suggestions" className={`xl:hidden pl-(--inline-padding-sm) py-2 ${location.pathname === "/suggestions" ? "bg-(--menu-color-medium) border-l-4 border-(--accent)" : ""}`}>Give Feedback</Link>
                    {pages && <ContentTree dir={pages} />}
                </Sidebar>
            </div>

            <ScrollRestoration />
            <Scripts />
            <footer className={`xl:hidden`}>
              <BottomNav />
            </footer>
          </body>
    </SidebarContext>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
