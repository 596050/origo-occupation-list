import {
  mapData,
  getCode,
  getCodes,
  getCodesList,
  getOccupation,
  getOccupations,
  getOccupationList,
  getData,
} from "../sic-list";

import data from "../data.json";

describe("getCode", () => {
  test("returns code for given description", () => {
    const result = "43390";
    const description = "Other building completion and finishing";
    expect(getCode(description)).toBe(result);
  });
});
