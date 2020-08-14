/* Implementation of pair class Here */

export class Pair<U, V> {
  private _first: U;
  private _second: V;

  // init pair
  constructor(first: U, second: V) {
    this._first = first;
    this._second = second;
  }

  //returns first element of the pair
  get first(): U {
    return this._first;
  }

  // returns second element of the pair
  get second(): V {
    return this._second;
  }

  // returns the pair in string format
  toString() {
    return (this._first + " " + this.second).toString();
  }
}
