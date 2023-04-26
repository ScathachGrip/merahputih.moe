import chai from "chai";

import { data } from "../src/cnames";
import { list } from "../src/restricted";
const expect = chai.expect;
const keys = Object.keys(data.active);

describe("Validating Cnames", () => {
  it("should be in alphabetical order", () => {
    for (let i = 0; i < keys.length - 1; i++) {
      if (keys[i] > keys[i + 1]) {
        expect.fail(`Cname "${keys[i]}" is out of order`);
      }
    }
  });

  it("should not be in the restricted list", () => {
    for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < list.list.length; j++) {
        if (keys[i].match(list.list[j])) {
          expect.fail(`Cname "${keys[i]}" is in the restricted list`);
        }
      }
    }
  });
});