/* 
    Find Intersection of Two Arrays
    Question:
    Return the intersection of two arrays.
    Example:
    Input: arr1 = [1,2,2,1], arr2 = [2,2] → Output: [2,2]
    Explanation:
    Loop through one array and use indexOf() on the second, then splice to avoid duplication.
*/
let ar = [1, 2, 2, 1];
let ar2 = [2, 2];
let result = [];
for (let i = 0; i < ar.length; i++) {
    let index = ar2.indexOf(ar[i]);
    if (index != -1) {
        result.push(ar[i]);
        ar2.splice(index, 1);
    }
}
console.log(result);