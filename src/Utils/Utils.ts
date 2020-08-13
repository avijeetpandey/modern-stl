/*
Swap function , Min , Max function ,  reverse_till , accumulate , count , next_permutation , distance , even , odd , isMultiple , isPower 
isAlphaNumeric , isVowel , isConsonant , isPrime ,  
*/

// Implementation of swap function , that interchanges the value 
const swap=(first : any , second :any)=>{
    [first,second] = [second,first]
}

// function to calculate minimum of two values
const min=(first:Number,second:Number)=>{
    if(first<second)
        return first
    return second
}

//function to calculate maximum of two values
const max=(first:Number,second:Number)=>{
    if(first>second)
        return first
    return second
}

// function to process reversing upto certain end points
const reverse_till=(item:Array<any>,end_point:Number)=>{
    
}

// function to process accumulation of items inside a list
const accumulate=(item:Array<Number>,initial_value : any=0)=>{
    for(let number of item)
        initial_value+=number
    return initial_value
}

// function to count occurences 
const count=(key:Number,ls:any)=>{
    let c = 0
    for(let item of ls)
        if(item===key)
            c++;
    return c
}

// function to find distance
const distance=(item:any)=>{

}

/*  Common mathematical utility functions */

// function to check even
const isEven=(number : number)=>{
    if(number%2==0)
        return true
    return false
}

//function to check odd
const isOdd=(number: number)=>{
    return !isEven(number)
}

// function to check isMultiple of
const isMultipleOf=(first : number,second:number)=>{
    return first % second ==0 ? true : false
}

// function to check is power of
const isPowerOf=(first:Number ,second:Number)=>{

}

// function to check perfect square
const isPerfectSquare=(number:Number)=>{

}

// function to check is prime
const isPrime=(number:Number)=>{

}

// function to square numbers
const square=(n : number)=> n*n

/* common character based utility functions */

//function to check is alphanumeric
const isAlphaNumeric=(item : any)=>{

}

// function to check is vowel
const isVowel=(item:String)=>{

}

// function to check is consonant
const isConsonant=(item:String)=>{

}


/* common date based utitlity functions */
const isLeapYear = (number : Number)=>{

}

export {
    isAlphaNumeric,
    isEven,
    isConsonant,
    isLeapYear,
    isMultipleOf,
    isOdd,
    isPerfectSquare,
    isPowerOf,
    isPrime,
    isVowel,
    max,
    min,
    square,
    swap,
    accumulate,
    reverse_till,
    distance,
}