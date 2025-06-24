/*Given an array, write a program to find the maximum product subarray.
Input: [2, 3, -2, 4]
Output: 6
(Explanation: The subarray [2, 3] has the maximum product 6)
*/


let ar= [2, 3, -2, 4];
let max=0;
for(let i=0;i<ar.length;i++)
{
    if(ar[i]*ar[i+1]>max)
    {
        max=ar[i]*ar[i+1];
    }
}
console.log(max);




