import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { getPascha } from "@/util/liturgicalCalendar";
import marianAntiphons from "@/data/marianAntiphons.json";

interface MarianAntiphon {
  id: string;
  incipit: string;
  antiphon: string;
  verse: string;
  response: string;
  collect: string;
}

export default function getMarianAntiphon(now: dayjs.Dayjs): MarianAntiphon {
  dayjs.extend(isBetween);

  const startOfNativity = now.month(11).date(24);
  const startOfAdvent = startOfNativity
    .startOf("week")
    .subtract(3, "week")
    .subtract(1, "day");
  if (now.isBetween(startOfAdvent, startOfNativity, "day", "[)")) {
    return marianAntiphons[0];
  }

  const purification = now.month(1).date(2);
  if (
    now.isBetween(startOfNativity, now.endOf("year"), "day", "[]") ||
    now.isBetween(now.startOf("year"), purification, "day", "[)")
  ) {
    return marianAntiphons[1];
  }

  const pascha = getPascha(now.year());
  if (now.isBetween(purification, pascha.subtract(4, "days"), "day", "[]")) {
    return marianAntiphons[2];
  }

  if (
    now.isBetween(
      pascha.subtract(1, "day"),
      pascha.add(7, "weeks").subtract(2, "day"),
      "day",
      "[]",
    )
  ) {
    return marianAntiphons[3];
  }

  return marianAntiphons[4];
}
