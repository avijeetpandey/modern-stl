"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 * @author {Avijeet Pandey}
 */
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.q = new LinkedList_1.LinkedList();
    }
    /**
     * Basic Queue Operations
     */
    /**
     * @returns {front} front of the queue
     */
    Queue.prototype.front = function () {
        return this.q.getHead();
    };
    /**
     * @param {data} inserts data into the queue
     */
    Queue.prototype.push = function (data) {
        this.q.insertAtEnd(data);
    };
    /**
     * @returns {boolean} removes from the queue
     */
    Queue.prototype.remove = function (data) {
        return this.q.deleteNode(data);
    };
    /**
     * @returns {size}  of the queue
     */
    Queue.prototype.size = function () {
        return this.q.size();
    };
    /**
     * @returns {List}  of the queue
     */
    Queue.prototype.toList = function () {
        return this.q.list();
    };
    /**
     * @returns {boolean} weather queue is empty or not
     */
    Queue.prototype.isEmpty = function () {
        return this.q.size() > 0 ? false : true;
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map