function _chunk(arr,size){
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        
        newArr[i] = arr.splice(0,size)
        if(arr.length <= size){
            newArr.push(arr)
            break
        }
    }
}
    
_chunk([1,2,3,4,5,6,7,8,9,10],6)