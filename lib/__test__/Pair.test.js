"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pair_1 = require("./../src/ds/Pair");
describe("Pair tests", function () {
    test("Init", function () {
        var pair = new Pair_1.Pair("Hi mom!", 42);
        expect(pair.first).toBe("Hi mom!");
        expect(pair.second).toBe(42);
        expect(pair.toString()).toBe("Hi mom! 42");
    });
});
//# sourceMappingURL=Pair.test.js.map