import { describe, expect, test } from "vitest";
import getHymn from "../../src/data/access/hymns";

describe("hymns.ts", () => {
  test("return compline hymn", () => {
    expect(getHymn("compline").id).equals("compline");
  });
});
