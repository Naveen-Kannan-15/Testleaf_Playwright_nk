// Intersection with arrays and manipulation

function intersection (arr1, arr2){
    let intArray = arr1.concat(arr2)
    console.log("The Intersection of the given array is ", intArray)
    let sortArray = intArray.sort()
    console.log("The Sorted array is", sortArray)

    // To remove duplicates 
    let noDuplicateArray1 = [...new Set(sortArray)] // Option 1 using Set array method
    console.log("Array without duplicates : ", noDuplicateArray1) 

    /* let noDuplicateArray2 = sortArray.filter ((item, index)=>{  // Option 2 using filter of item and index method
        return sortArray.indexOf(item) === index
    })
    console.log(noDuplicateArray2) 
    */
    let result = []; // initializing an empty array and iterating each element of array 1 in array 2 and if true capturing them in the empty array
    for (let i = 0; i < noDuplicateArray1.length; i++) {
        if (arr1.includes(noDuplicateArray1[i]) && arr2.includes(noDuplicateArray1[i])) {
        result.push(noDuplicateArray1[i]);
        }
    }
    console.log("Repeated elements in the array are : ", result)
}
  
const arr1 = [1,2,3,4,5]
const arr2 = [2,5,6,4,1]
intersection(arr1, arr2)