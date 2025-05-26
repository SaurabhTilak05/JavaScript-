/*Rotate an Array by k Positions
Question:
 Write a function that rotates an array to the right by k steps.
 Example:
 Input: arr = [1,2,3,4,5], k = 2 → Output: [4,5,1,2,3]
Explanation:
 To rotate right, take the last k elements and move them to the front. Use slicing and concatenation.
*/
let ar = [1, 2, 3, 4, 5];
let k = 2;
for (let i = 0; i < k; i++) {
    let str = ar[0];
    for (let j = 0; j < ar.length - 1; j++) {
        ar[j] = ar[j + 1];

    }
    ar[ar.length - 1] = str;
}
console.log(ar);