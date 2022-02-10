function sumUniq(nums) {
    //use hash map to find obj that has appeared more than once
    const hashMap = {};
    // initialize varialbe sum by 0
    let sum = 0;
  
    // loop each element from nums array
    for (let element of nums) {
        // if hashMap does not have element
      if (!hashMap[element]) {
          // set the element as 1
        hashMap[element] = 1;
      } else {
          //else increment by one 
        hashMap[element]++;
      }
    }
  
    // for loop to find obj that presents only once
    for (let obj in hashMap) {
        // if the value is eqaul to 1 (meaning no duplicates)
      if (hashMap[obj] === 1) {
        //sum key of the object. I used parseInt to get the key as an integer
        sum += parseInt(obj)
      }
    }
  
    return sum;
 }

console.log(sumUniq([1, 2, 3, 2, 2])) // 4
console.log(sumUniq([1, 1, 3, 2, 2])) // 3
console.log(sumUniq([1, 1, 3, 2, 5, 6, 1])) // 16