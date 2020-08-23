"use strict";
/**
 * @author {Avijeet Pandey}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
/**
 * Definintion of node class
 */
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
exports.Node = Node;
/**
 * Definition of the LinkedList Class
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // head of the linkedList
        this.head = null;
    }
    /**
     *
     * @param {data} value to be inserted
     * @returns {node} inserted Node
     */
    LinkedList.prototype.insertAtBegin = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = new Node(data);
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };
    /**
     *
     * @param {data} -> Tha value that needs to be inserted
     * @returns {node } the last inserted node
     */
    LinkedList.prototype.insertAtEnd = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var getLast_1 = function (node) {
                return node.next ? getLast_1(node.next) : node;
            };
            var lastNode = getLast_1(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    };
    /**
     * @params {data} -> data to be deleted
     * @returns {void}
     */
    LinkedList.prototype.deleteNode = function (data) {
        var deleted = false;
        if (!this.head)
            return deleted;
        while (this.head && this.head.data === data) {
            deleted = true;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        return deleted;
    };
    /**
     * @returns {T[]} list of Nodes in the linked list
     */
    LinkedList.prototype.list = function () {
        var linkedList = [];
        if (!this.head) {
            return linkedList;
        }
        var add = function (node) {
            linkedList.push(node.data);
            return node.next ? add(node.next) : linkedList;
        };
        return add(this.head);
    };
    /**
     * @returns {length} length of the linked list
     */
    LinkedList.prototype.size = function () {
        return this.list().length;
    };
    /**
     *
     * @param data data to be searched
     * @returns {boolean} true or false
     */
    LinkedList.prototype.find = function (data) {
        var list = this.list();
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var i = list_1[_i];
            if (i === data)
                return true;
        }
        return false;
    };
    /**
     *
     * @param {data} element to be searched
     * @returns {index} index of the element
     */
    LinkedList.prototype.findIndex = function (data) {
        var linkedList = this.list();
        for (var i = 0; i < linkedList.length; i++) {
            if (linkedList[i] === data)
                return i;
        }
        return -1;
    };
    /**
     * @returns {list to elements as string}
     */
    LinkedList.prototype.toString = function () {
        return this.list().toString();
    };
    /**
   * @returns {size of the new linkedlist formed from list of elements}
   */
    LinkedList.prototype.fromList = function (list) {
        var _this = this;
        list.forEach(function (value) {
            _this.insertAtEnd(value);
        });
        return this.size();
    };
    /**
     * @returns {head} of the linked List
     */
    LinkedList.prototype.getHead = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=LinkedList.js.map