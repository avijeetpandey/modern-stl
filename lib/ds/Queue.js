"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
/**
 * @author {Avijeet Pandey}
 */
var LinkedList_1 = require("./LinkedList");
var Queue = /** @class */ (function () {
    function Queue(data) {
        this.q = new LinkedList_1.LinkedList();
    }
    Object.defineProperty(Queue.prototype, "front", {
        /**
         * Basic Queue Operations
         */
        get: function () {
            return this.q.getHead();
        },
        enumerable: false,
        configurable: true
    });
    Queue.prototype.push = function (data) {
        this.q.insertAtEnd(data);
    };
    Queue.prototype.remove = function (data) {
        return this.q.deleteNode(data);
    };
    Queue.prototype.size = function () {
        return this.q.size();
    };
    Queue.prototype.toList = function () {
        return this.q.list();
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map