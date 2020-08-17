export interface IQueue<T> {
    push(data: T): void;
    remove(data: T): boolean;
    size(data: T): number;
    isEmpty(): boolean;
    front(): T;
}
export declare class Queue<T> {
    private q;
    constructor(data: T);
    /**
     * Basic Queue Operations
     */
    get front(): T;
    push(data: T): void;
    remove(data: T): boolean;
    size(): number;
    toList(): T[];
}
//# sourceMappingURL=Queue.d.ts.map