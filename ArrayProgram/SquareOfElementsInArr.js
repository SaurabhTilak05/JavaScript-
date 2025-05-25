/*Create a New Array with Squares of Elements
Question: Write a program that creates a new array with the square of each element.
 Example Input: [1, 2, 3]
 Expected Output: [1, 4, 9]
 Explanation: Loop through the original array, square each number, and push into a new array.
*/
let ar = [1, 2, 3];
let sq;
let a = [];
for (let i = 0; i < ar.length; i++) {
    sq = parseInt(ar[i] * ar[i]);
    a[i] = sq;
}
console.log(a);