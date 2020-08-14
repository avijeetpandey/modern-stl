"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triplet = void 0;
/* Implementtaion of Triplet class  */
var Triplet = /** @class */ (function () {
    function Triplet(first, second, third) {
        this._first = first;
        this._second = second;
        this._third = third;
    }
    Object.defineProperty(Triplet.prototype, "first", {
        // get the first element
        get: function () {
            return this._first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triplet.prototype, "second", {
        // get the second element
        get: function () {
            return this._second;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triplet.prototype, "third", {
        get: function () {
            return this._third;
        },
        enumerable: false,
        configurable: true
    });
    Triplet.prototype.toString = function () {
        return (this._first + " " + this._second + " " + this._third).toString();
    };
    Triplet.prototype.toList = function () {
        var ls = [this._first, this._second, this._third];
        return ls;
    };
    return Triplet;
}());
exports.Triplet = Triplet;
//# sourceMappingURL=Triplet.js.map