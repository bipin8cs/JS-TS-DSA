// Create a function which will accepts two arrays arr1 and arr2. 
// The function should return true if every value in arr1 has its corresponding value squared in array2. 
// The frequency of values must be same.(Effecient)
function squaredFrquencyEqual(arr1, arr2) {
    let firstPair = false
    for (let e of arr1) {
        if (!arr2.includes(e * e) || !arr2.includes(e * e) && arr2.indexOf(e * e)) {
            return false;
        }
        firstPair = true;
        console.log("Because of first pair 1---->2")
    }
    if (firstPair === false) {
        for (let e of arr2) {
            if (!arr1.includes(e * e) || arr1.indexOf(e * e) !== arr1.lastIndexOf(e * e)) {
                return false;
            }
            console.log("Because of second pair 2---->1")
        }
    }
    return true;
}
console.log(squaredFrquencyEqual([1, 2, 3], [9, 1, 4]));

//t.c O(N2)

function isSameFrequency(arr1, arr2) {
    if (arr1?.length !== arr2?.length) {
        return false;
    }
    let arrFreq1 = {};
    let arrFreq2 = {};
    for (const val of arr1) {
        arrFreq1[val] = (arrFreq1[val] || 0) + 1
    }
    for (const val1 of arr2) {
        arrFreq2[val1] = (arrFreq2[val1] || 0) + 1
    }

    for (let key in arrFreq1) {
        if (!key * key in arrFreq2) return false;
        if (arrFreq1[key] !== arrFreq2[key * key]) return false;
    }
    return true;
}
console.log((isSameFrequency([1, 2, 3], [9, 1, 4])));
//T.C O(n)