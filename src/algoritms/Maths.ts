/*
GCD , LCM , factors  , add , subtract , multiply , fast exponentiation , generate fibonacci numbers , seive and segmented sieve
*/
export const fast_exponentiation = (a: number, b: number): number => {
  if (b === 0) return 1;
  // Breaking the problem into furthur subproblems
  let subproblem: number = fast_exponentiation(a, b / 2);

  if (b & 1) {
    return a * subproblem * subproblem;
  }
  return subproblem * subproblem;
};
