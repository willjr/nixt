import "reflect-metadata";

import { Container } from "inversify";
import { resolve } from "node:path";
import { bindings } from "../../bindings.js";
import { INixService } from "../../interfaces.js";

describe("NixService", () => {
  let container: Container;
  let sut: INixService;

  beforeAll(() => {
    container = new Container;
    container.loadAsync(bindings);
    sut = container.get(INixService);
  })

  beforeEach(() => {
    container.snapshot();
  })

  afterEach(() => {
    container.restore();
  })

  it("is defined", () => {
    expect(sut).toBeDefined();
  })

  it("returns nix results", () => {
    const p = resolve("__mocks__/valid.nixt");
    const expected = { "path": p, "suites": { "Valid Tests": ["always passes"] } }

    const result = sut.eval("get-testspec.nix", {
      trace: false,
      debug: false,
      args: { path: p }
    })

    expect(result).toStrictEqual(expected)
  })

  it.todo("throws error on invalid path")
})
