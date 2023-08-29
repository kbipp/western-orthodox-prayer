import hymns from "@/data/hymns.json";

interface Hymn {
  id: string;
  name: string;
  stanzas: Array<Array<string>>;
}

export default function getHymn(id: string): Hymn | undefined {
  return hymns.find((h) => h.id === id);
}
