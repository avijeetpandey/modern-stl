"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triplet_1 = require("../src/ds/Triplet");
describe("Triplet Tests ", function () {
    test("Init", function () {
        var triplet = new Triplet_1.Triplet(1, "Avijeet", "B+");
        expect(triplet.first).toBe(1);
        expect(triplet.second).toBe("Avijeet");
        expect(triplet.third).toBe("B+");
        expect(triplet.toList()).toStrictEqual([1, "Avijeet", "B+"]);
        expect(triplet.toString()).toBe("1 Avijeet B+");
    });
});
//# sourceMappingURL=Triplet.test.js.map