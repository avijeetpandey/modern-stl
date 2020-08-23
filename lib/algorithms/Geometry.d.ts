/**
 * @author {Avijeet Pandey}
 */
/** Point Class  and its Operations*/
export interface IPoint {
    distance(P1: Point, P2: Point): number;
    slope(P1: Point, P2: Point): number;
}
export declare class Point implements IPoint {
    _x: number;
    _y: number;
    constructor(x: number, y: number);
    /**
     * @returns {X} co-ordinate
     */
    get x(): number;
    /**
     * @returns {Y} co-ordinate
     */
    get y(): number;
    /**
     * @param {Point , Point }
     * @returns {number} distance between points
     */
    distance(P2: Point): number;
    /**
     * @param {Point}
     * @return {Slope} of the point with respect to origin
     */
    slope(P2: Point): number;
}
/** Triangle class and its implementation */
export interface ITriangle {
    sideOne: number;
    sideTwo: number;
    sideThree: number;
    isRightAngled(): boolean;
    perimeter(): number;
    area(): number;
    hasZeroArea(): boolean;
    type(): string;
}
/** Vector class  */
export interface Ivector {
    crossProduct(v: Vector): Vector;
    dotProduct(v: Vector): number;
    isParallelTo(v: Vector): boolean;
    isPerpendicularTo(v: Vector): boolean;
    isUnitVector(): boolean;
    add(v: Vector): Vector;
    subtract(v: Vector): Vector;
    multiplyWith(value: number): void;
    show(): string;
    magnitude(): number;
    angle(v: Vector): number;
}
export declare class Vector implements Ivector {
    private _x;
    private _y;
    private _z;
    constructor(x: number, y: number, z: number);
    /** Getter Functions */
    get x(): number;
    get y(): number;
    get z(): number;
    /** Functions implementation of IVector Interface */
    /**
     *
     * @param {vector}
     * @returns {Vector} added vector
     */
    add(v: Vector): Vector;
    /**
     *
     * @param {Vector}
     * @returns {Vector} the subtracted vector
     */
    subtract(v: Vector): Vector;
    /**
     * @returns {vector} in string format
     */
    show(): string;
    /**
     * @returns {magnitude} of the vector
     */
    magnitude(): number;
    /**
     * function to check weather this is a unit vector or not
     * @returns {boolean} true or false
     */
    isUnitVector(): boolean;
    /**
     * @param {scalar Value} , multiplies the vector with scalar value provided
     * @returns {Vector} multiplied vector
     */
    multiplyWith(value: number): void;
    /**
     * @param {Vector : V2}
     * @returns {Vector} vector perpendicular to the two vectors
     */
    crossProduct(v: Vector): Vector;
    /**
     * @param {vector : v2}
     * @returns {number} dot product of the vectors
     */
    dotProduct(v: Vector): number;
    /**
     *
     * @param {vector}
     * @returns {cosine of angle}
     */
    angle(v: Vector): number;
    /**
     *
     * @param {vector}
     * @returns {boolean} true or false based on either vectors are perpendicular or not
     */
    isPerpendicularTo(v: Vector): boolean;
    /**
     *
     * @param {Vector}
     * @return {boolean} true or false based on either vectors are parallel or not
     */
    isParallelTo(v: Vector): boolean;
}
//# sourceMappingURL=Geometry.d.ts.map