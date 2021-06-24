// ==== Implement your code here! ====
console.log('Hello World');

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result =range(1, 10)
console.log(result)
