import dayjs from "dayjs";

/*
Algorithm from : https://blog.georgekosmidis.net/c-calculating-orthodox-and-catholic-easter.html
 */
export function getPascha(year: number) {
  const a = year % 19;
  const b = year % 7;
  const c = year % 4;
  const d = (19 * a + 16) % 30;
  const e = (2 * c + 4 * b + 6 * d) % 7;
  const f = (19 * a + 16) % 30;
  const key = f + e + 3;
  const month = key > 30 ? 5 : 4;
  const day = key > 30 ? key - 30 : key;
  return dayjs()
    .year(year)
    .month(month - 1)
    .date(day);
}
