import {max , min} from '../utils/Utils'

export const search = (key: any, array: Array<any>) => {
  for (let i of array) if (i === key) return true;
  return false;
};

// implementation of binary search function that returns the index of the key if present other-wise returns -1
export const binary_search = (key: any, array: Array<any>) => {
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


export const upper_bound=()=>{

}

export const lower_bound=()=>{

}

export const max_element = (array : number[]) : number =>{
  let m_element : number = array[0]
  for(let i of array)
    m_element = max(m_element,i)

  return m_element
}

export const min_element=( array : number[]) : number =>{
  let m_element : number = array[0]
  for(let i of array)
    m_element = min(m_element,i)

  return m_element
}

export const min_max=(array:number[]):number[]=>{
    let elems : number[] = [max_element(array),min_element(array)]
    return elems
}


