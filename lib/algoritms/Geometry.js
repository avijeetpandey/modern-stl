"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        /**
         * @returns {X} co-ordinate
         */
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        /**
         * @returns {Y} co-ordinate
         */
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param {Point , Point }
     * @returns {number} distance between points
     */
    Point.prototype.distance = function (P2) {
        var d;
        d = Math.sqrt(Math.pow(Math.abs(this.x - P2.x), 2) + Math.pow(Math.abs(this.y - P2.y), 2));
        return d;
    };
    /**
     * @param {Point}
     * @return {Slope} of the point with respect to origin
     */
    Point.prototype.slope = function (P2) {
        var x2 = P2.x;
        var y2 = P2.y;
        var s;
        s = (y2 - this.y) / (x2 - this.x);
        return s;
    };
    return Point;
}());
exports.Point = Point;
/** Line Class and its Operations */
// export interface ILine{
//     isParallel(L1 :Line , L2 : Line) : boolean
//     isPerpendicular(L1 : Line , L2 : Line) : boolean
//     angle(L1:Line,L2:Line) : number
//     intersect(L1:Line,L2:Line) : boolean
// }
// class Line implements ILine{
// }
/** Triangle class and its implementation */
/** Plane Class */
/** Vector class  */
/** Area class and its operations */
/** Volume class and its Functions */
//# sourceMappingURL=Geometry.js.map