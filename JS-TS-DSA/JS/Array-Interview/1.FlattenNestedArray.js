
// //No depth fully flatten enire array
// function flattenArray(arr) {
//     let resultArray = [];
//     for (let e of arr) {
//         if (Array.isArray(e)) {
//             resultArray.push(...flattenArray(e));
//         } else {
//             resultArray.push(e)
//         }

//     }
//     return resultArray;
// }
// const result = flattenArray([1, [2, 3], [4, [6]]]);
// console.log("result", result)



//without using recurrssive approach
let arr = [1, [2, 3], [4, [6]]];
while (arr.some(e => Array.isArray(e))) {
    arr = arr.reduce((prev, curr) => { return prev.concat(curr); }, [])
}
console.log("result", arr);