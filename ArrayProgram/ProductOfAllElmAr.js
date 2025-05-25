/*Replace Each Element with Product of All Other Elements
Question:
 Given an array, return a new array where each element is the product of all other elements.
 Example:
 Input: [1, 2, 3, 4] → Output: [24, 12, 8, 6]
Explanation:
 Use nested loops or compute total product and divide for each index (except when 0 is present).
*/
let ar = [1, 2, 3, 4];
let t = 1;
for (let i = 0; i < ar.length; i++) {
    t = t * ar[i];
}
let a = [];
for (let i = 0; i < ar.length; i++) {
    a[i] = t / ar[i];
}
console.log(a);