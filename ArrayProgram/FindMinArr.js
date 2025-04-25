/*
	Find Minimum Element in Array
	Description: Find the smallest element in an array.
	Input: [10, 20, 30, 5, 15]
	Output: 5
*/

let ar=[10, 20, 30, 5, 15];
let min=ar[0];
for(let i=0;i<ar.length;i++)
{
	if(ar[i]<min)
	{
		min=ar[i];
	}
}
console.log("Minimun Element is:"+min);
