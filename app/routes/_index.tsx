import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rookie Math" },
    { name: "description", content: "I document my experience learning math" },
  ];
}

export default function Home() {
  return <div>Hello</div>;
}
