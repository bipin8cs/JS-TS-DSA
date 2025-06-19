function fibonacciSries(nuberOfTerm) {
    if (nuberOfTerm <= 0) return [];
    if (nuberOfTerm === 1) return [1];
    let seq = [0, 1];
    for (let index = 2; index < nuberOfTerm; index++) {
        const nextsq = seq[index - 1] + seq[index - 2];
        seq.push(nextsq);
    }
    return seq;
}
// console.log("fibonacciSries",fibonacciSries(5))