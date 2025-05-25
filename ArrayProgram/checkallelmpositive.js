/* Check if All Elements are Positive
Question: Write a program to check if all elements in an array are positive numbers.
 Example Input: [5, 3, 8, 0, -1]
 Expected Output: false
*/

let ar = [5, 3, 8, 0, 1];
let flag = true;
for (let i = 0; i < ar.length; i++) {
    if (ar[i] < 0) {
        flag = false;
    }
}
if (flag) {
    console.log("True");
} else {
    console.log("False");
}