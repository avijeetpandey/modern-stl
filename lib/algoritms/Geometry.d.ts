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
/** Line Class and its Operations */
/** Triangle class and its implementation */
/** Plane Class */
/** Vector class  */
/** Area class and its operations */
/** Volume class and its Functions */
//# sourceMappingURL=Geometry.d.ts.map