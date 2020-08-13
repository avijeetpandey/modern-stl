"use strict";
/*
Swap function , Min , Max function ,  reverse_till , accumulate , count , next_permutation , distance , even , odd , isMultiple , isPower
isAlphaNumeric , isVowel , isConsonant , isPrime ,
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.distance = exports.reverse_till = exports.accumulate = exports.swap = exports.square = exports.min = exports.max = exports.isVowel = exports.isPrime = exports.isPowerOf = exports.isPerfectSquare = exports.isOdd = exports.isMultipleOf = exports.isLeapYear = exports.isConsonant = exports.isEven = exports.isAlphaNumeric = void 0;
// Implementation of swap function , that interchanges the value 
var swap = function (first, second) {
    var _a;
    _a = [second, first], first = _a[0], second = _a[1];
};
exports.swap = swap;
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
// function to find distance
var distance = function (item) {
};
exports.distance = distance;
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
// function to check is power of
var isPowerOf = function (first, second) {
};
exports.isPowerOf = isPowerOf;
// function to check perfect square
var isPerfectSquare = function (number) {
};
exports.isPerfectSquare = isPerfectSquare;
// function to check is prime
var isPrime = function (number) {
};
exports.isPrime = isPrime;
// function to square numbers
var square = function (n) { return n * n; };
exports.square = square;
/* common character based utility functions */
//function to check is alphanumeric
var isAlphaNumeric = function (item) {
};
exports.isAlphaNumeric = isAlphaNumeric;
// function to check is vowel
var isVowel = function (item) {
};
exports.isVowel = isVowel;
// function to check is consonant
var isConsonant = function (item) {
};
exports.isConsonant = isConsonant;
/* common date based utitlity functions */
var isLeapYear = function (number) {
};
exports.isLeapYear = isLeapYear;
//# sourceMappingURL=Utils.js.map