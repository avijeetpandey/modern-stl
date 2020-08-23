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
export declare class Stack<T> implements Istack<T> {
    /** private data members */
    private _topElement;
    private _length;
    /**
     *
     * @param data accepts the data to be pushed
     * @returns nothing
     */
    push(data: T): void;
    pop(): void;
    /** returns if the stack is empty or not */
    isEmpty(): boolean;
    /**
     * @return top element of the stack
     */
    top(): T;
    /**
     * @returns {size} of the stack
     */
    size(): number;
}
//# sourceMappingURL=Stack.d.ts.map