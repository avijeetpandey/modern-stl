/**
 * @author {Avijeet Pandey}
 */
import { LinkedList } from "./LinkedList";

export interface IQueue<T> {
  push(data: T): void;
  remove(data: T): boolean;
  size(data: T): number;
  isEmpty(): boolean;
  front(): T;
}
export class Queue<T> implements IQueue<T> {
  private q: LinkedList<T>;
  constructor() {
    this.q = new LinkedList<T>();
  }

  /**
   * Basic Queue Operations
   */
  /**
   * @returns {front} front of the queue
   */
  public front(): T {
    return this.q.getHead();
  }
  /**
   * @param {data} inserts data into the queue
   */
  public push(data: T) {
    this.q.insertAtEnd(data);
  }
  /**
   * @returns {boolean} removes from the queue
   */

  public remove(data: T): boolean {
    return this.q.deleteNode(data);
  }

  /**
   * @returns {size}  of the queue
   */
  public size(): number {
    return this.q.size();
  }
  /**
   * @returns {List}  of the queue
   */
  public toList(): T[] {
    return this.q.list();
  }
  /**
   * @returns {boolean} weather queue is empty or not
   */
  public isEmpty(): boolean {
    return this.q.size() > 0 ? false : true;
  }
}
