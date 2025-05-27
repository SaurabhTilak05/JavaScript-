/* Find the Index of a Specific Element
Question: Write a program to find the index of a specific number in an array.
 Example Input: [3, 5, 7, 9], search for 7
 Expected Output: 2
 Explanation: Use a loop to compare each element with the given number.
*/

let ar = [3, 5, 7, 9];
let s = 7;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] == s) {
        console.log(ar.indexOf(ar[i]));
    }
}