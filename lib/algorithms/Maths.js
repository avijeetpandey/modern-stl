"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.subtract = exports.add = exports.fast_exponentiation = void 0;
/*
GCD , LCM , factors  , add , subtract , multiply , fast exponentiation , generate fibonacci numbers ,
seive and segmented sieve , factorial function
*/
exports.fast_exponentiation = function (a, b) {
    if (b === 0)
        return 1;
    // Breaking the problem into furthur subproblems
    var subproblem = exports.fast_exponentiation(a, b / 2);
    if (b & 1) {
        return a * subproblem * subproblem;
    }
    return subproblem * subproblem;
};
exports.add = function (a, b) {
    return a + b;
};
exports.subtract = function (a, b) {
    return a - b;
};
exports.multiply = function (a, b) {
    return a * b;
};
//# sourceMappingURL=Maths.js.map