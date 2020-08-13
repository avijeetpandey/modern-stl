const search = (key: any, array: Array<any>) => {
  for (let i of array) if (i === key) return true;
  return false;
};

// implementation of binary search function that returns the index of the key if present other-wise returns -1
const binary_search = (key: any, array: Array<any>) => {
  array = array.sort();
  console.log(array);
  let end = array.length - 1;
  let start = 0;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (array[mid] === key) return mid;
    if (array[mid] < key) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};


const upper_bound=()=>{

}

const lower_bound=()=>{

}

const max_element = ()=>{

}

const min_element=()=>{

}

const min_max=()=>{

}

export { search, binary_search,upper_bound,lower_bound,max_element,min_element,min_max};
