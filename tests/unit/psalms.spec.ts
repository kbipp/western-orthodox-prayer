import { describe, expect, test } from "vitest";
import getPsalm from "../../src/data/access/psalms";

describe("psalms.ts", () => {
  test('return Psalm 4 when given id "4"', () => {
    expect(getPsalm("4").id).equals("4");
  });
});
