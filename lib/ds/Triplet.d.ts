/**
 * @author {Avijeet Pandey}
 */
export declare class Triplet<F, S, T> {
    private _first;
    private _second;
    private _third;
    constructor(first: F, second: S, third: T);
    get first(): F;
    get second(): S;
    get third(): T;
    toString(): string;
    toList(): (F | S | T)[];
}
//# sourceMappingURL=Triplet.d.ts.map