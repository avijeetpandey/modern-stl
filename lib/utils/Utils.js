"use strict";
/*
 Min , Max function ,  reverse_till , accumulate , count , next_permutation , distance , even , odd , isMultiple , isPower
isAlphaNumeric , isVowel , isConsonant , isPrime , generate with parameters , make_triplets
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_triplets = exports.count = exports.reverse_till = exports.accumulate = exports.square = exports.min = exports.max = exports.isPrime = exports.isOdd = exports.isMultipleOf = exports.isEven = void 0;
// function to calculate minimum of two values
var min = function (first, second) {
    if (first < second)
        return first;
    return second;
};
exports.min = min;
//function to calculate maximum of two values
var max = function (first, second) {
    if (first > second)
        return first;
    return second;
};
exports.max = max;
// function to process reversing upto certain end points
var reverse_till = function (item, end_point) {
};
exports.reverse_till = reverse_till;
// function to process accumulation of items inside a list
var accumulate = function (item, initial_value) {
    if (initial_value === void 0) { initial_value = 0; }
    for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
        var number = item_1[_i];
        initial_value += number;
    }
    return initial_value;
};
exports.accumulate = accumulate;
// function to count occurences 
var count = function (key, ls) {
    var c = 0;
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var item = ls_1[_i];
        if (item === key)
            c++;
    }
    return c;
};
exports.count = count;
/*  Common mathematical utility functions */
// function to check even
var isEven = function (number) {
    if (number % 2 == 0)
        return true;
    return false;
};
exports.isEven = isEven;
//function to check odd
var isOdd = function (number) {
    return !isEven(number);
};
exports.isOdd = isOdd;
// function to check isMultiple of
var isMultipleOf = function (first, second) {
    return first % second == 0 ? true : false;
};
exports.isMultipleOf = isMultipleOf;
// function to check is prime
var isPrime = function (number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
};
exports.isPrime = isPrime;
// function to square numbers
var square = function (n) { return n * n; };
exports.square = square;
// function to make pythagorean triplets
var make_triplets = function (n) {
    var a, b, c;
    if (n % 2 === 0) {
        a = n;
        b = (n / 2 * n / 2) + 1;
        c = (n / 2 * n / 2) - 1;
        return [a, b, c];
    }
    a = n;
    b = (n * n / 2 - 0.5);
    c = (n * n / 2 + 0.5);
    return [a, b, c];
};
exports.make_triplets = make_triplets;
//# sourceMappingURL=Utils.js.map