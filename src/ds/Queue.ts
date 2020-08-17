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
export class Queue<T> implements IQueue<T>{
    private q : LinkedList<T>
    constructor(){
        this.q = new LinkedList<T>()
    }

    /**
     * Basic Queue Operations
     */
    public front() : T{
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

    public isEmpty() : boolean{
        return this.q.size() > 0 ? false : true
    }
}