const arr = [1,2,3,4,5]
const arr2 = ["jorge", "maria", "Tereza", "Simon"]
const arr3 = [true, true, false, false, true, false]


const reverse = (arr) => {
    let reverseArr = []
    for(let i = 0; i < arr.length ; i++){
    reverseArr[i] = arr[arr.length - (i+1)]
}
// return reverseArr
 }
 reverse(arr3)
 console.log(reverseArr)
//  console.log(reverse(arr))