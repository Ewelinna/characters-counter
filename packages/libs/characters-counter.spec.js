var { countCharacters } = require("./characters-counter");

describe("countCharacters function", function() {
  it("returns json with number of characters for a given sentence", function() {
    expect(countCharacters("Ala ma kota i psa")).toEqual({
      A: 1,
      l: 1,
      a: 4,
      " ": 4,
      m: 1,
      k: 1,
      o: 1,
      i: 1,
      p: 1,
      s: 1,
      t: 1
    });
  });

  it("returns empty json when an empty string is given", function() {
    expect(countCharacters("")).toEqual({});
  });

  it("returns json with number of characters for a string with comas", function() {
    expect(countCharacters(",,")).toEqual({ ",": 2 });
  });
});
