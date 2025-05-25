/*Count Occurrences of a Specific Number
Question: Count how many times a specific number appears in an array.
 Example Input: [1, 2, 3, 2, 4, 2], number = 2
 Expected Output: 3
 Explanation: Use a loop and increase count each time the number is found.
*/
let ar = [1, 2, 3, 2, 4, 2];
let el = 3;
let count = 0;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] == el) {
        count++;
    }
}
console.log(el + "  ----->  " + count);