/*
GCD , LCM , factors  , add , subtract , multiply , fast exponentiation , generate fibonacci numbers , 
seive and segmented sieve , factorial function
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


export const add=(a : number , b : number) : number=> { 
  return a + b
}

export const subtract=(a : number  , b : number) : number=>{
  return a - b
}

export const multiply = (a:number , b:number) : number => {
  return a*b
}
