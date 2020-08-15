/* Implementtaion of Triplet class  */
export class Triplet<F, S, T> {
  private _first: F;
  private _second: S;
  private _third: T;

  constructor(first: F, second: S, third: T) {
    this._first = first;
    this._second = second;
    this._third = third;
  }

  // get the first element
  get first(): F {
    return this._first;
  }

  // get the second element
  get second(): S {
    return this._second;
  }

  get third(): T {
    return this._third;
  }

  toString() {
    return (this._first + " " + this._second + " " + this._third).toString();
  }

  toList() {
    let ls = [this._first, this._second, this._third];
    return ls;
  }

}
