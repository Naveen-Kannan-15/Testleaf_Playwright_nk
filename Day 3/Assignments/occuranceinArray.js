// Counting the occurance of an element in the array

const a = [2,4,5,2,1,4,2];
const l = 4;

let count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === l) {
        count++;
    }
}

console.log(count)