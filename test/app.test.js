import data from "../src/data/data.json";
import app from "../src/app";

describe("app", function () {
  it("does nothing", function () {
    expect(true).toBe(true);
  });
  it("data loaded successfully", () => {
    expect(data).toMatchSnapshot();
  });
});
