"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min_max = exports.min_element = exports.max_element = exports.binary_search = exports.search = void 0;
var Utils_1 = require("../utils/Utils");
exports.search = function (key, array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i === key)
            return true;
    }
    return false;
};
// implementation of binary search function that returns the index of the key if present other-wise returns -1
exports.binary_search = function (key, array) {
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
exports.max_element = function (array) {
    var m_element = array[0];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var i = array_2[_i];
        m_element = Utils_1.max(m_element, i);
    }
    return m_element;
};
exports.min_element = function (array) {
    var m_element = array[0];
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var i = array_3[_i];
        m_element = Utils_1.min(m_element, i);
    }
    return m_element;
};
exports.min_max = function (array) {
    var elems = [exports.max_element(array), exports.min_element(array)];
    return elems;
};
//# sourceMappingURL=Search.js.map