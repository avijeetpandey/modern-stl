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
      Math.pow(Math.abs(this.x - P2.x), 2) +
        Math.pow(Math.abs(this.y - P2.y), 2)
    );
    return d;
  }

  /**
   * @param {Point}
   * @return {Slope} of the point with respect to origin
   */
  public slope(P2: Point): number {
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
export interface Ivector {
  crossProduct(v: Vector): Vector; // done
  dotProduct(v: Vector): number; // done
  isParallelTo(v: Vector): boolean; // done
  isPerpendicularTo(v: Vector): boolean; // done
  isUnitVector(): boolean; // done
  add(v: Vector): Vector;
  subtract(v: Vector): Vector;
  multiplyWith(value: number): void; // done
  show(): string; // done
  magnitude(): number; // done
  angle(v: Vector): number; // done
}

export class Vector implements Ivector {
  private _x: number;
  private _y: number;
  private _z: number;

  constructor(x: number, y: number, z: number) {
    this._x = x;
    this._y = y;
    this._z = z;
  }
  /** Getter Functions */
  get x(): number {
    return this._x;
  }
  get y(): number {
    return this._y;
  }
  get z(): number {
    return this._z;
  }

  /** Functions implementation of IVector Interface */
  /**
   *
   * @param {vector}
   * @returns {Vector} added vector
   */
  public add(v: Vector): Vector {
    let ax: number = this.x + v.x;
    let ay: number = this.y + v.y;
    let az: number = this.z + v.z;

    let addedVector: Vector = new Vector(ax, ay, az);
    return addedVector;
  }

  /**
   *
   * @param {Vector}
   * @returns {Vector} the subtracted vector
   */
  public subtract(v: Vector): Vector {
    let ax: number = this.x + -1 * v.x;
    let ay: number = this.y + -1 * v.y;
    let az: number = this.z + -1 * v.z;

    let subVector: Vector = new Vector(ax, ay, az);
    return subVector;
  }
  /**
   * @returns {vector} in string format
   */
  public show(): string {
    const vector: string = `${this.x}i + ${this.y}j + ${this.z}k `;
    return vector;
  }
  /**
   * @returns {magnitude} of the vector
   */

  public magnitude(): number {
    let m: number;
    m = Math.sqrt(
      Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)
    );
    return Number(m.toFixed(5))
  }

  /**
   * function to check weather this is a unit vector or not
   * @returns {boolean} true or false
   */
  public isUnitVector(): boolean {
    return this.magnitude() === 1;
  }

  /**
   * @param {scalar Value} , multiplies the vector with scalar value provided
   * @returns {Vector} multiplied vector
   */
  public multiplyWith(value: number): void {
    this._x = value * this.x;
    this._y = value * this.y;
    this._z = value * this.z;
  }

  /**
   * @param {Vector : V2}
   * @returns {Vector} vector perpendicular to the two vectors
   */

  public crossProduct(v: Vector): Vector {
    let xcap: number = this.y * v.z - this.z * v.y;
    let ycap: number = this.z * v.x - this.x * v.z;
    let zcap: number = this.x * v.y - this.y * v.x;

    let crossedVector: Vector = new Vector(xcap, ycap, zcap);

    return crossedVector;
  }

  /**
   * @param {vector : v2}
   * @returns {number} dot product of the vectors
   */
  public dotProduct(v: Vector): number {
    let scalarProduct: number = 0;
    scalarProduct += this.x * v.x;
    scalarProduct += this.y * v.y;
    scalarProduct += this.z * v.z;
    return scalarProduct;
  }

  /**
   *
   * @param {vector}
   * @returns {cosine of angle}
   */
  public angle(v: Vector): number {
    let cosAngle: number =
      this.dotProduct(v) / (this.magnitude() * v.magnitude());
    return Number(cosAngle.toFixed(5))
  }

  /**
   *
   * @param {vector}
   * @returns {boolean} true or false based on either vectors are perpendicular or not
   */
  public isPerpendicularTo(v: Vector): boolean {
    return this.angle(v) === 0;
  }

  /**
   *
   * @param {Vector}
   * @return {boolean} true or false based on either vectors are parallel or not
   */
  public isParallelTo(v: Vector): boolean {
    return this.angle(v) === 1;
  }
}

/** Area class and its operations */

/** Volume class and its Functions */
