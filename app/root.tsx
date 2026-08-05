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
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import ContentTree from "./components/ContentTree";
import BottomNav from "./components/BottomNav"
import { RouteTree } from "./utils/globals";
import type { Directory } from "./utils/types";

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
  const [sidebarOpen, setContentTreeOpen] = useState(false);
  const pages = RouteTree.children.find(node => node.type == "Directory" && node.name == "pages") as Directory | undefined

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-svh flex flex-col">
        <header className="sticky top-0 z-100 relative">
            <NavBar menuAction={ (_) => {setContentTreeOpen(!sidebarOpen)} }/>
        </header>
        <main className="h-full overflow-hidden relative flex flex-col">
          <div className="overflow-scroll px-(--inline-padding-mobile) py-[1em] flex-1 flex-col gap-6">
            {children}
          </div>
          <SideBar sidebarOpen={sidebarOpen} >
            <Link to={"/"} className="w-full inline-block pl-(--inline-padding-mobile) py-2 border-b-1 border-(--border-color-light)">About the project</Link>
            {pages && <ContentTree dir={pages} />}
          </SideBar>
          <footer>
          <BottomNav />
          </footer>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
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
