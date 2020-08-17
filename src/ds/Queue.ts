/**
 * @author {Avijeet Pandey}
 */
import {LinkedList} from './LinkedList'

export interface IQueue<T>{
    push(data : T) : void
    remove(data:T) : boolean
    size(data : T) : number
    isEmpty()  : boolean
    front() : T
}
export class Queue<T>{
    private q : LinkedList<T>
    constructor(data : T){
        this.q = new LinkedList<T>()
    }

    /**
     * Basic Queue Operations
     */
    get front() : T{
        return this.q.getHead()
    }

    public push(data : T){
        this.q.insertAtEnd(data)
    }

    public remove(data : T){
        return this.q.deleteNode(data)
    }

    public size() : number{
        return this.q.size()
    }

    public toList() : T[]{
        return this.q.list()
    }
}