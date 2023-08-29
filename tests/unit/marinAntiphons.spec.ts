import { describe, expect, test } from "vitest";
import dayjs from "dayjs";
import getMarianAntiphon from "../../src/data/access/marianAntiphons";

describe("marianAntiphons.ts", () => {
  test("returns Advent antiphon on Saturday before First Sunday of Advent", () => {
    const date = dayjs(new Date(2023, 11, 2));
    expect(getMarianAntiphon(date).id).equals("advent");
  });

  test("returns Advent antiphon on day before Christmas Eve", () => {
    const date = dayjs(new Date(2023, 11, 23));
    expect(getMarianAntiphon(date).id).equals("advent");
  });

  test("returns Nativity antiphon on Christmas Eve", () => {
    const date = dayjs(new Date(2023, 11, 24));
    expect(getMarianAntiphon(date).id).equals("nativity");
  });

  test("returns Nativity antiphon at end of year", () => {
    const date = dayjs(new Date(2023, 11, 31));
    expect(getMarianAntiphon(date).id).equals("nativity");
  });

  test("returns Nativity antiphon on New Year", () => {
    const date = dayjs(new Date(2023, 0, 1));
    expect(getMarianAntiphon(date).id).equals("nativity");
  });

  test("returns Nativity antiphon on day before Purification", () => {
    const date = dayjs(new Date(2023, 1, 1));
    expect(getMarianAntiphon(date).id).equals("nativity");
  });

  test("returns Lent antiphon on Purification", () => {
    const date = dayjs(new Date(2023, 1, 2));
    expect(getMarianAntiphon(date).id).equals("lent");
  });

  test("returns Lent antiphon on Holy Wednesday", () => {
    const date = dayjs(new Date(2023, 3, 12));
    expect(getMarianAntiphon(date).id).equals("lent");
  });

  test("returns Pascha antiphon on Holy Saturday", () => {
    const date = dayjs(new Date(2023, 3, 15));
    expect(getMarianAntiphon(date).id).equals("paschaltide");
  });

  test("returns Pascha antiphon on Friday before Pentecost", () => {
    const date = dayjs(new Date(2023, 5, 2));
    expect(getMarianAntiphon(date).id).equals("paschaltide");
  });

  test("returns ordinary antiphon on Saturday before Pentecost", () => {
    const date = dayjs(new Date(2023, 5, 3));
    expect(getMarianAntiphon(date).id).equals("ordinary");
  });
  test("returns ordinary antiphon on Friday before First Sunday of Advent", () => {
    const date = dayjs(new Date(2023, 11, 1));
    expect(getMarianAntiphon(date).id).equals("ordinary");
  });
});
