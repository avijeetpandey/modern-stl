"use strict";
/* Implementation of pair class Here */
/**
 * @author {Avijeet Pandey}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pair = void 0;
var Pair = /** @class */ (function () {
    // init pair
    function Pair(first, second) {
        this._first = first;
        this._second = second;
    }
    Object.defineProperty(Pair.prototype, "first", {
        //returns first element of the pair
        get: function () {
            return this._first;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pair.prototype, "second", {
        // returns second element of the pair
        get: function () {
            return this._second;
        },
        enumerable: false,
        configurable: true
    });
    // returns the pair in string format
    Pair.prototype.toString = function () {
        return (this._first + " " + this.second).toString();
    };
    return Pair;
}());
exports.Pair = Pair;
//# sourceMappingURL=Pair.js.map