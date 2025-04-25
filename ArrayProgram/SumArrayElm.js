/*
	Sum of Elements in Array
	Description: Calculate the sum of all elements in an array.
	Input: [1, 2, 3, 4, 5]
	Output: 15
*/
let ar=[1, 2, 3, 4, 5];
let sum=0;
for(let i=0;i<ar.length;i++)
{
	sum=sum+ar[i];
}
console.log("Sum is:"+sum);