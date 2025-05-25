/* Find the Longest Consecutive Increasing Subsequence
Question:
 Find the length of the longest consecutive increasing subsequence.
 Example:
 Input: [1, 9, 3, 10, 4,5, 20, 2] → Output: 4 (1,2,3,4)
Explanation:
 Sort the array, then check for consecutive values with a counter.

*/
let ar = [1, 9, 3, 10, 4, 20, 2];
for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (ar[i] > ar[j]) {
            let temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }
}
let count = 0;
for (let i = 0; i < ar.length; i++) {
    if (ar[i + 1] - ar[i] == 1) {
        count++;
    }
}
console.log(count);