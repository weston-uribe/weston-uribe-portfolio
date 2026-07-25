import { localizedGreeting } from "../src/greeting";

describe("localizedGreeting", () => {
  it("returns a non-empty string for en", () => {
    const result = localizedGreeting("en");
    expect(result).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns a non-empty string for es", () => {
    const result = localizedGreeting("es");
    expect(result).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("src/index.ts entrypoint", () => {
  it("calls localizedGreeting('en') and logs the result", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("../src/index");
    expect(logSpy).toHaveBeenCalledWith(localizedGreeting("en"));
    logSpy.mockRestore();
  });
});
