// if return true both objects are equal
//if return false means both object are not eqal
function deepEqal(a, b) {
    if (a === b) return true
    //first i checked the two objects are need to be object
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
        return false;
    }
    // now lets take the keys length should be equal 
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let k of keysA) {
        //the key of the both objects are now equal or not 

        if (!keysB.includes(k)) return false;
        //now recurrsively checking  for nested keys 
        if (!deepEqal(a[k], b[k])) return false;
    }
    return true;
}
function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (deepEqal(arr[i], unique[j])) {
                isDuplicate = true
                break;
            };
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
const arr = [
    { name: "Alice", data: { age: 25 } },
    { name: "Bob", data: { age: 30 } },
    { name: "Alice", data: { age: 25 } },
    { name: "Alice", data: { age: 26 } },
];

console.log(removeDuplicates(arr));



//finding the unique object based one specific key 
//. Write logic to get unique objects from below array 
function uniqueBySingleKeyProperty(arr, key) {
    const unique = []
    let seen = {};
    for (let e of arr) {
        const keyByUnique = e[key] || e?.name;
        if (!seen[keyByUnique]) {
            unique.push(e);
            seen[keyByUnique] = true
        }

    }
    return unique;
}
const r = uniqueBySingleKeyProperty([{ name: "sai", age: 15 }, { name: "Nang", age: 15 }, { name: "sai", age: 16 }, { name: "Nang", age: 17 }, { name: "111111", age: 18 }], 'age')
console.log(r)



