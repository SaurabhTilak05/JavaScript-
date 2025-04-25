/*
	Find Maximum Element in Array
	Description: Find the largest element in an array.
	Input: [12, 34, 56, 78, 23]
	Output: 78
*/

let ar=[12, 34, 56, 78, 23];
let max=0;
for(let i=0;i<ar.length;i++)
{
	if(ar[i]>max)
	{
		max=ar[i];
	}
}
console.log("Max is:"+max)