function deepEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== 'object' || a === null ||
      typeof b !== 'object' || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

function removeDuplicates(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
      if (deepEqual(arr[i], unique[j])) {
        isDuplicate = true;
        break;
      }
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

const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);
