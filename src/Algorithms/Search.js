// function to implement binary search
exports.BinarySearch=()=>{
    console.log("This is Binary Search")
}


// function to implement linear search 

exports.LinearSearch = (key,list)=>{
    // Time Complexity O(N)
    let present = false;
    for(let i = 0 ; i<list.length ; i++){
        if(list[i]===key)
            return true;
    }
    return present;
}


// function to implement lower bound
exports.LowerBound=(ley,list)=>{

}

// function to implement upper bound
exports.UpperBound=(key,list)=>{

}

