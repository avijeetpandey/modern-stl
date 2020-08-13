export const search = (key :any , array : Array<any>) =>{
    for(let i of array)
        if(i===key)
            return true
    return false
}