export interface IQueue<T> {
    push(data: T): void;
    remove(data: T): boolean;
    size(data: T): number;
    isEmpty(): boolean;
    front(): T;
}
export declare class Queue<T> implements IQueue<T> {
    private q;
    constructor();
    /**
     * Basic Queue Operations
     */
    /**
     * @returns {front} front of the queue
     */
    front(): T;
    /**
     * @param {data} inserts data into the queue
     */
    push(data: T): void;
    /**
     * @returns {boolean} removes from the queue
     */
    remove(data: T): boolean;
    /**
     * @returns {size}  of the queue
     */
    size(): number;
    /**
     * @returns {List}  of the queue
     */
    toList(): T[];
    /**
     * @returns {boolean} weather queue is empty or not
     */
    isEmpty(): boolean;
}
//# sourceMappingURL=Queue.d.ts.map