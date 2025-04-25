/* Merge Two Arrays
Description: Merge two arrays into one.
Input: [1, 2, 3], [4, 5, 6]
Output: [1, 2, 3, 4, 5, 6]
*/


let ar=[1, 2, 3];
let arr=[4, 5, 6];
let as=[ar.length+arr.length];
for(let i=0;i<ar.length;i++)
{
	as[i]=ar[i];
}
for(let i=0;i<arr.length;i++)
{
	as[i+ar.length]=arr[i];
}
for(let i=0;i<as.length;i++)
{
	console.log(as[i]);
}