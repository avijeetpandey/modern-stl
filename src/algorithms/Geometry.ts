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
export interface Ivector{
  crossProduct() : Vector
  dotProduct() : number ,
  isParallelTo(v : Vector) : boolean
  isPerpendicularTo(v:Vector)  : boolean 
  isUnitVector() : boolean
  add(v:Vector)  : Vector
  multiplyWith(value : number) : Vector 
  show() : string
  magnitude() : number
  angle(v:Vector) : number
}

class Vector implements Ivector{
  private _x : number
  private _y : number
  private _z : number

  constructor(x:number , y:number , z:number){
    this._x = x
    this._y = y
    this._z = z
  }
  /** Getter Functions */
  get x() : number {
    return this._x
  }
  get y() : number {
    return this._y
  }
  get z() : number {
    return this._z
  }

  /** Functions implementation of IVector Interface */
  /**
   * @returns {vector} in string format
   */
  public show() : string {
    const vector : string  = `${this._x}i + ${this._y}j + ${this._z}k `
    return vector
  }

  

}

/** Area class and its operations */

/** Volume class and its Functions */
