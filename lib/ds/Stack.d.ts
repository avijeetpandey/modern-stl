export interface Istack<T> {
    push(data: T): void;
    pop(): void;
    isEmpty(): boolean;
    size(): number;
    top(): T;
}
export declare class Stack<T> implements Istack<T> {
    private _topElement;
    private _length;
    push(data: T): void;
    pop(): void;
    isEmpty(): boolean;
    top(): T;
    size(): number;
}
//# sourceMappingURL=Stack.d.ts.map