import { localizedGreeting } from "../src/greeting";

describe("localizedGreeting", () => {
  it('returns a non-empty string for "en"', () => {
    const result = localizedGreeting("en");
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  it('returns a non-empty string for "es"', () => {
    const result = localizedGreeting("es");
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("src/index.ts entrypoint", () => {
  it('calls localizedGreeting("en") and logs the result', async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    await import("../src/index");

    expect(logSpy).toHaveBeenCalled();
    const loggedValue = logSpy.mock.calls[0]?.[0];
    expect(typeof loggedValue).toBe("string");
    expect((loggedValue as string).length).toBeGreaterThan(0);

    logSpy.mockRestore();
  });
});
