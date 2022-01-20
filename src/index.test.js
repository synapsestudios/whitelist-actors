const { expect } = require("chai");
const whitelistActors = require("./index");

describe("whitelist-actors", () => {
  it("Allows actors in whitelist", async () => {
    process.env.GITHUB_ACTOR = "johncleese";
    process.env.INPUT_WHITELIST = "grahamchapman, terrygilliam, johncleese";
    expect(whitelistActors).to.not.throw();
  });

  it("Ignores whitespace", async () => {
    process.env.GITHUB_ACTOR = "johncleese";
    process.env.INPUT_WHITELIST = "grahamchapman,terrygilliam,    johncleese";
    expect(whitelistActors).to.not.throw();
  });

  it("Requires actor to be in whitelist", async () => {
    process.env.GITHUB_ACTOR = "johncleese";
    process.env.INPUT_WHITELIST = "grahamchapman, terrygilliam";
    expect(whitelistActors).to.throw(
      `"johncleese" is not allowed to dispatch this workflow. Actors allowed: "grahamchapman", "terrygilliam"`
    );
  });
});
