import chai from "chai";

import { data } from "../src/cnames";
const expect = chai.expect;
const keys = Object.keys(data.active);

describe("Validating Cnames", () => {
  it("should be in alphabetical order", () => {
    for (let i = 0; i < keys.length - 1; i++) {
      if (keys[i] > keys[i + 1]) {
        expect.fail("Cnames are not in alphabetical order");
      }
    }
  });
});