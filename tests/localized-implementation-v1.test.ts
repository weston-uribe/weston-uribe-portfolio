import { localizedGreeting } from "../src/greeting.js";

describe("localized-implementation-v1", () => {
  it("returns greetings for en and es", () => {
    expect(localizedGreeting("en").length).toBeGreaterThan(0);
    expect(localizedGreeting("es").length).toBeGreaterThan(0);
  });
});
