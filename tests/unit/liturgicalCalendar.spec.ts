import { describe, expect, test } from "vitest";
import { getPascha } from "../../src/util/liturgicalCalendar";
import dayjs from "dayjs";

describe("liturgicalCalendar.ts", () => {
  test("getPascha returns correct date for 2023", () => {
    const expected = dayjs(new Date(2023, 3, 16));
    expect(getPascha(2023).isSame(expected, "year")).toBeTruthy();
  });
});
