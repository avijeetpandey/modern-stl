/**
 * @author {Avijeet Pandey}
 */
/**
 * Definintion of node class
 */
export declare class Node<T> {
    data: T;
    next: Node<T> | null;
    prev: Node<T> | null;
    constructor(data: T);
}
interface ILinkedList<T> {
    insertAtBegin(data: T): Node<T>;
    insertAtEnd(data: T): Node<T>;
    deleteNode(data: T): boolean;
    find(data: T): boolean;
    findIndex(data: T): number;
    size(): number;
    list(): T[];
    toString(): string;
    getHead(): any;
}
/**
 * Definition of the LinkedList Class
 */
export declare class LinkedList<T> implements ILinkedList<T> {
    private head;
    /**
     *
     * @param {data} value to be inserted
     * @returns {node} inserted Node
     */
    insertAtBegin(data: T): Node<T>;
    /**
     *
     * @param {data} -> Tha value that needs to be inserted
     * @returns {node } the last inserted node
     */
    insertAtEnd(data: T): Node<T>;
    /**
     * @params {data} -> data to be deleted
     * @returns {void}
     */
    deleteNode(data: T): boolean;
    /**
     * @returns {T[]} list of Nodes in the linked list
     */
    list(): T[];
    /**
     * @returns {length} length of the linked list
     */
    size(): number;
    /**
     *
     * @param data data to be searched
     * @returns {boolean} true or false
     */
    find(data: T): boolean;
    /**
     *
     * @param {data} element to be searched
     * @returns {index} index of the element
     */
    findIndex(data: T): number;
    /**
     * @returns {list to elements as string}
     */
    toString(): string;
    /**
   * @returns {size of the new linkedlist formed from list of elements}
   */
    fromList(list: T[]): number;
    /**
     * @returns {head} of the linked List
     */
    getHead(): any;
}
export {};
//# sourceMappingURL=LinkedList.d.ts.map