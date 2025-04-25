/*
	Reverse an Array
	Description: Reverse the order of elements in an array.
	Input: [1, 2, 3, 4, 5]
	Output: [5, 4, 3, 2, 1]
*/

let ar=[1, 2, 3, 4, 5];
for(let i=0;i<ar.length/2;i++)
{
	let temp=ar[i];
	ar[i]=ar[ar.length-1-i];
	ar[ar.length-1-i]=temp;
}
for(let i=0;i<ar.length;i++)
{
	console.log(ar[i]);
}