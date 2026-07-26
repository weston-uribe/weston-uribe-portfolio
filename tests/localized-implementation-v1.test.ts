import { localizedGreeting } from "../src/greeting";

describe("localizedGreeting", () => {
  it("returns a non-empty string for en", () => {
    expect(localizedGreeting("en").length).toBeGreaterThan(0);
  });

  it("returns a non-empty string for es", () => {
    expect(localizedGreeting("es").length).toBeGreaterThan(0);
  });
});

describe("src/index.ts", () => {
  it("logs the English greeting", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    jest.isolateModules(() => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("../src/index");
    });

    expect(logSpy).toHaveBeenCalledWith(localizedGreeting("en"));
    logSpy.mockRestore();
  });
});
