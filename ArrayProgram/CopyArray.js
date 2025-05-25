/* Copy Elements from One Array to Another
Question: Copy all elements of one array to another using a loop.
 Example Input: [5, 10, 15]
 Expected Output: [5, 10, 15]
 Explanation: Use a loop to assign each element from the original array to a new one.
*/
let ar = [5, 10, 15];
let arr = [];
for (let i = 0; i < ar.length; i++) {
    arr[i] = ar[i];
}
console.log(arr);