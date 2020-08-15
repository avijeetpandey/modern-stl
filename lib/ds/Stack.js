"use strict";
/**
 * @author {Avijeet Pandey}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Node = /** @class */ (function () {
    function Node(data, prev) {
        this._data = data;
        this._prev = prev;
    }
    return Node;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this._length = 0;
    }
    /**
     *
     * @param data accepts the data to be pushed
     * @returns nothing
     */
    Stack.prototype.push = function (data) {
        var newNode = new Node(data, this._topElement);
        this._topElement = newNode;
        this._length++;
    };
    Stack.prototype.pop = function () {
        var popperNode = this._topElement;
        this._topElement = popperNode._prev;
        this._length--;
    };
    /** returns if the stack is empty or not */
    Stack.prototype.isEmpty = function () {
        return this._length > 0 ? false : true;
    };
    /**
     * @return top element of the stack
     */
    Stack.prototype.top = function () {
        return this._topElement._data;
    };
    /**
     * @returns {size} of the stack
     */
    Stack.prototype.size = function () {
        return this._length;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map