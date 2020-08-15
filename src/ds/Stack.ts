/**
 * @author {Avijeet Pandey}
 */

export interface Istack<T> {
  push(data: T): void;
  pop(): void;
  isEmpty(): boolean;
  size(): number;
  top(): T;
}

class Node<T> {
  _data: T;
  _prev: Node<T>;

  constructor(data: T, prev: Node<T>) {
    this._data = data;
    this._prev = prev;
  }
}

export class Stack<T> implements Istack<T> {
  /** private data members */
  private _topElement: any;
  private _length: number = 0;

  /**
   *
   * @param data accepts the data to be pushed
   * @returns nothing
   */
  public push(data: T): void {
    let newNode = new Node<T>(data, this._topElement);
    this._topElement = newNode;
    this._length++;
  }

  public pop(): void {
    let popperNode = this._topElement;
    this._topElement = popperNode._prev;
    this._length--;
  }

  /** returns if the stack is empty or not */
  public isEmpty(): boolean {
    return this._length > 0 ? false : true;
  }

  /**
   * @return top element of the stack
   */
  public top(): T {
    return this._topElement._data;
  }

  /**
   * @returns {size} of the stack
   */
  public size(): number {
    return this._length;
  }
}
