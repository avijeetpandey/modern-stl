"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fast_exponentiation = void 0;
/*
GCD , LCM , factors  , add , subtract , multiply , fast exponentiation , generate fibonacci numbers , seive and segmented sieve
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
//# sourceMappingURL=Maths.js.map