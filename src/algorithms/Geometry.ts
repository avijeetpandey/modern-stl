/**
 * @author {Avijeet Pandey}
 */
/** Point Class  and its Operations*/
export interface IPoint {
  distance(P1: Point, P2: Point): number;
  slope(P1: Point, P2: Point): number;
}

export class Point implements IPoint {
  _x: number;
  _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
  /**
   * @returns {X} co-ordinate
   */
  get x(): number {
    return this._x;
  }

  /**
   * @returns {Y} co-ordinate
   */

  get y(): number {
    return this._y;
  }

  /**
   * @param {Point , Point }
   * @returns {number} distance between points
   */
  public distance(P2: Point): number {
    let d: number;
    d = Math.sqrt(
      Math.pow(Math.abs(this.x - P2.x), 2) + Math.pow(Math.abs(this.y - P2.y), 2)
    );
    return d;
  }

  /**
   * @param {Point}
   * @return {Slope} of the point with respect to origin
   */
  public slope( P2: Point): number {
    let x2 = P2.x;
    let y2 = P2.y;

    let s: number;

    s = (y2 - this.y) / (x2 - this.x);

    return s;
  }
}

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
