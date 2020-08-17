"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = exports.Point = void 0;
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
        d = Math.sqrt(Math.pow(Math.abs(this.x - P2.x), 2) +
            Math.pow(Math.abs(this.y - P2.y), 2));
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
var Vector = /** @class */ (function () {
    function Vector(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Object.defineProperty(Vector.prototype, "x", {
        /** Getter Functions */
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "z", {
        get: function () {
            return this._z;
        },
        enumerable: false,
        configurable: true
    });
    /** Functions implementation of IVector Interface */
    /**
     *
     * @param {vector}
     * @returns {Vector} added vector
     */
    Vector.prototype.add = function (v) {
        var ax = this.x + v.x;
        var ay = this.y + v.y;
        var az = this.z + v.z;
        var addedVector = new Vector(ax, ay, az);
        return addedVector;
    };
    /**
     *
     * @param {Vector}
     * @returns {Vector} the subtracted vector
     */
    Vector.prototype.subtract = function (v) {
        var ax = this.x + -1 * v.x;
        var ay = this.y + -1 * v.y;
        var az = this.z + -1 * v.z;
        var subVector = new Vector(ax, ay, az);
        return subVector;
    };
    /**
     * @returns {vector} in string format
     */
    Vector.prototype.show = function () {
        var vector = this.x + "i + " + this.y + "j + " + this.z + "k ";
        return vector;
    };
    /**
     * @returns {magnitude} of the vector
     */
    Vector.prototype.magnitude = function () {
        var m;
        m = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
        return Number(m.toFixed(5));
    };
    /**
     * function to check weather this is a unit vector or not
     * @returns {boolean} true or false
     */
    Vector.prototype.isUnitVector = function () {
        return this.magnitude() === 1;
    };
    /**
     * @param {scalar Value} , multiplies the vector with scalar value provided
     * @returns {Vector} multiplied vector
     */
    Vector.prototype.multiplyWith = function (value) {
        this._x = value * this.x;
        this._y = value * this.y;
        this._z = value * this.z;
    };
    /**
     * @param {Vector : V2}
     * @returns {Vector} vector perpendicular to the two vectors
     */
    Vector.prototype.crossProduct = function (v) {
        var xcap = this.y * v.z - this.z * v.y;
        var ycap = this.z * v.x - this.x * v.z;
        var zcap = this.x * v.y - this.y * v.x;
        var crossedVector = new Vector(xcap, ycap, zcap);
        return crossedVector;
    };
    /**
     * @param {vector : v2}
     * @returns {number} dot product of the vectors
     */
    Vector.prototype.dotProduct = function (v) {
        var scalarProduct = 0;
        scalarProduct += this.x * v.x;
        scalarProduct += this.y * v.y;
        scalarProduct += this.z * v.z;
        return scalarProduct;
    };
    /**
     *
     * @param {vector}
     * @returns {cosine of angle}
     */
    Vector.prototype.angle = function (v) {
        var cosAngle = this.dotProduct(v) / (this.magnitude() * v.magnitude());
        return Number(cosAngle.toFixed(5));
    };
    /**
     *
     * @param {vector}
     * @returns {boolean} true or false based on either vectors are perpendicular or not
     */
    Vector.prototype.isPerpendicularTo = function (v) {
        return this.angle(v) === 0;
    };
    /**
     *
     * @param {Vector}
     * @return {boolean} true or false based on either vectors are parallel or not
     */
    Vector.prototype.isParallelTo = function (v) {
        return this.angle(v) === 1;
    };
    return Vector;
}());
exports.Vector = Vector;
//# sourceMappingURL=Geometry.js.map