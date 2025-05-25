/*Find All Pairs with a Given Sum
Question:
 Find all pairs in an array whose sum is equal to a target value.
 Example:
 Input: arr = [1, 3, 2, 2, 4, 0], sum = 4
 Output: [[1,3],[2,2],[4,0]]
Explanation:
 Use two nested loops to check if any pair adds up to the target.
*/
let ar = [1, 3, 2, 2, 4, 0];
let elm = 4;
let a=[];
for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (ar[i] + ar[j] == elm) {
           a.push([ar[i], ar[j]]);
        }
    }
}
console.log(a);
