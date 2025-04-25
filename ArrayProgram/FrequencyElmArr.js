/*
	Find the Frequency of an Element in Array
	Description: Find how many times an element appears in an array.
	Input: [1, 2, 2, 3, 4, 2, 5], element 2
	Output: 3
*/
let ar=[1, 2, 2, 3, 4, 2, 5,1];
let count=0;
let elm=2;
for(let i=0;i<ar.length;i++)
{
	if(ar[i]===elm)
	{
		count++;
	}
}
console.log("Frequency is:"+count)
