export interface Istack<T> {
  push(data: T): void
  pop(): void
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

export class Stack<T> implements Istack<T>{
    private _topElement : any
    private _length : number = 0


    public push(data : T) : void{
        let newNode = new Node<T>(data,this._topElement)
        this._topElement = newNode
        this._length++
    }

    public pop() : void{
        let popperNode = this._topElement
        this._topElement = popperNode._prev
        this._length--
    }

    public isEmpty() : boolean{
        return (this._length > 0 ) ? false : true
    }

    public top() : T {
        return this._topElement._data
    }

    public size () : number{
        return this._length
    }
}