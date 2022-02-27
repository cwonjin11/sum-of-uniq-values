/*
 use hashmap to find key value pairs for the given array
    make value as times of appearance.

    if value is 1
    add the value
 */
function sumUniq(arr){

    // const hash = new Map()
    const hashMap = {}
    
// console.log(hash.set('ace', 'abc'))
// console.log(hash.set('acc', 'aaa'))
// console.log(hash, 'aa')
// console.log(hash.size, 'size')

    for(const element of arr){
        if(hashMap[element]){
            hashMap[element]++
        } else {
            hashMap[element] = 1
        }
    }

    let sum = 0
    for(let element in hashMap){
        if(hashMap[element] === 1){
            sum += parseInt(element)
        } 
    }

    // console.log(Object.keys(hashMap)) //[ '1', '2', '3', '5', '6' ]
    // console.log(Object.values(hashMap)) //[ 3, 1, 1, 1, 1 ]
    return sum
   

}




// console.log(sumUniq([1, 2, 3, 2, 2])) // 4
// console.log(sumUniq([1, 1, 3, 2, 2])) // 3
console.log(sumUniq([1, 1, 3, 2, 5, 6, 1, 0, 6])) // 10