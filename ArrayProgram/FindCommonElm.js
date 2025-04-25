/*
	Find the Common Elements in Two Arrays
	Description: Find the common elements between two arrays.
	Input: [1, 2, 3, 4], [3, 4, 5, 6]
	Output: [3, 4]
*/

let ar=[1, 2, 3, 4];
let arr=[3, 4, 5, 6];
for(let i=0;i<ar.length;i++)
{
	for(let j=0;j<arr.length;j++)
	{
		if(ar[i]==arr[j])
		{
			console.log(ar[i]);
		}
	}
}