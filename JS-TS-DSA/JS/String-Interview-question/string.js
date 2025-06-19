// //find  if one string can be formed by rearranging the letters of other string 
// let str1 = "aaz";
// let str2 = "zza";

// function isAnagramWithoutInbuild(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     const count = {};
//     for (let char of str1) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         if (!count[char]) return false;
//         count[char]--;
//     }



// }

// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("rat", "car"));       // false

// console.log('anagaram without in build methods', anagaram)
// //t.s O(n);
// function isAnagram(str1, str2) {
//     const normalize = (str) => str.splitsort((a, b) => a.toLowerCase() - btoLowerCase())
//     if (normalize(str1) === normalize(str2)) {
//         return true
//     } else {
//         return false;
//     };
// }
// let ana = isAnagram(str1, str2);
// console.log("an1 buildin", ana);