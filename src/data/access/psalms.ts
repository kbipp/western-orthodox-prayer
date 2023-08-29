import psalms from "@/data/psalms.json";

interface Psalm {
  id: string;
  name: string;
  incipit: string;
  lines: Array<string>;
}

export default function getPsalm(id: string): Psalm | undefined {
  return psalms.find((p) => p.id === id);
}
