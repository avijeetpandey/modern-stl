/**
 * @author {Avijeet Pandey}
 */

/**
 * Definintion of node class
 */

export class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;
  constructor(public data: T) {}
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
  getHead() : any;
  
}

/**
 * Definition of the LinkedList Class
 */
export class LinkedList<T> implements ILinkedList<T> {
  // head of the linkedList
  private head: Node<T> | null = null;

  /**
   *
   * @param {data} value to be inserted
   * @returns {node} inserted Node
   */
  public insertAtBegin(data: T): Node<T> {
    const node = new Node<T>(data);
    if (!this.head) {
      this.head = new Node(data);
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return node;
  }

  /**
   *
   * @param {data} -> Tha value that needs to be inserted
   * @returns {node } the last inserted node
   */

  public insertAtEnd(data: T): Node<T> {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      node.prev = lastNode;
      lastNode.next = node;
    }
    return node;
  }

  /**
   * @params {data} -> data to be deleted
   * @returns {void}
   */
  public deleteNode(data: T): boolean {
    let deleted: boolean = false;

    if (!this.head) return deleted;

    while (this.head && this.head.data === data) {
      deleted = true;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }

    return deleted;
  }

  /**
   * @returns {T[]} list of Nodes in the linked list
   */
  public list(): T[] {
    const linkedList: T[] = [];
    if (!this.head) {
      return linkedList;
    }
    const add = (node: Node<T>): T[] => {
      linkedList.push(node.data);
      return node.next ? add(node.next) : linkedList;
    };
    return add(this.head);
  }

  /**
   * @returns {length} length of the linked list
   */
  public size(): number {
    return this.list().length;
  }

  /**
   *
   * @param data data to be searched
   * @returns {boolean} true or false
   */

  public find(data: T): boolean {
    let list: T[] = this.list();
    for (let i of list) if (i === data) return true;
    return false;
  }
  /**
   *
   * @param {data} element to be searched
   * @returns {index} index of the element
   */

  public findIndex(data: T): number {
    let linkedList: T[] = this.list();
    for (let i = 0; i < linkedList.length; i++) {
      if (linkedList[i] === data) return i;
    }
    return -1;
  }
  /**
   * @returns {list to elements as string}
   */
  public toString(): string {
    return this.list().toString();
  }
    /**
   * @returns {size of the new linkedlist formed from list of elements}
   */
  public fromList(list: T[]): number {
    list.forEach((value: T) => {
      this.insertAtEnd(value);
    });
    return this.size();
  }

  /**
   * @returns {head} of the linked List
   */
  public getHead() : any{
    return this.head?.data
  }

// /**
//  * @returns the last node 
//  */
//   public getLast():any {
//     let node = this.head;
//     if(node === null) return null;

//     while(node?.next !=null) {
//       node = node.next;
//     }
//     return node;
//   }
}
