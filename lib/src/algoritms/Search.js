"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min_max = exports.min_element = exports.max_element = exports.lower_bound = exports.upper_bound = exports.binary_search = exports.search = void 0;
var search = function (key, array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i === key)
            return true;
    }
    return false;
};
exports.search = search;
// implementation of binary search function that returns the index of the key if present other-wise returns -1
var binary_search = function (key, array) {
    array = array.sort();
    console.log(array);
    var end = array.length - 1;
    var start = 0;
    while (start <= end) {
        var mid = start + (end - start) / 2;
        if (array[mid] === key)
            return mid;
        if (array[mid] < key)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return -1;
};
exports.binary_search = binary_search;
var upper_bound = function () {
};
exports.upper_bound = upper_bound;
var lower_bound = function () {
};
exports.lower_bound = lower_bound;
var max_element = function () {
};
exports.max_element = max_element;
var min_element = function () {
};
exports.min_element = min_element;
var min_max = function () {
};
exports.min_max = min_max;
//# sourceMappingURL=Search.js.map