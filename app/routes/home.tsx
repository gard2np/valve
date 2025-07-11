import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "공동사용 밸브 안내" },
    { name: "description", content: "공동사용 밸브 안내" },
  ];
}

export default function Home() {
  return <Welcome />;
}
