function getActor() {
  return process.env.GITHUB_ACTOR;
}

function getWhitelist() {
  return process.env.INPUT_WHITELIST.split(",").map((v) =>
    v.toLowerCase().trim()
  );
}

function assertActorInWhitelist(actor, whitelist) {
  if (!whitelist.includes(actor)) {
    const actorsAllowed = whitelist
      .map((username) => `"${username}"`)
      .join(", ");
    throw new Error(
      `"${actor}" is not allowed to dispatch this workflow. Actors allowed: ${actorsAllowed}`
    );
  }
}

module.exports = function main() {
  const actor = getActor();
  const whitelist = getWhitelist();
  assertActorInWhitelist(actor, whitelist);
};
