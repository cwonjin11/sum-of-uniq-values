function inOf(arr){

    // const hashMap = {}

    // for(let key of arr){
    //     if(!hashMap[key]){
    //         hashMap[key] = 1
    //     }
    //     else{
    //         hashMap++
    //     }

    // }
    // console.log(hashMap)

    for(let key in hashMap){
        console.log(hashMap[key])
        console.log(key, "key")
    }

    // for(let el of arr){  // value of arr
    //     console.log(el)
    // }

    // for(let el in arr){ // index of arr
    //     console.log(el)
    // }

}
console.log(inOf({'1':1, "2":2}))