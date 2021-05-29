const expect = chai.expect,
  flowerbedtest = [1, 0, 0, 0, 1],
  tn = 1;

describe("Can Plce FLowers", () => {
  it("Can place the flowers", () => {
    expect(canPlaceFlowers(flowerbedtest, tn)).to.equal(
      true,
      "Please check your function!"
    );
  });
});
