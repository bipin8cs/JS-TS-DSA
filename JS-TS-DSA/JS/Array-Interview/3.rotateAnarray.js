function rotateArrayRight(arr, k) {
    //ensure  k should be within the bound of the array
    //Take the remainder when k is divided by the length of the array arr, and assign that remainder back to k.
    k = k % arr.length;
    //k==0 no need rotate the array 
    if (k === 0) {
        return arr;
    }
    console.log(arr.slice(-k))//[4, 5]
    console.log(arr.slice(0, -k));//[1, 2, 3]
    return arr.slice(-k).concat(arr.slice(0, -k));

}
const arr = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArrayRight(arr, k)
console.log(rotatedArray)//[4, 5, 1, 2, 3]