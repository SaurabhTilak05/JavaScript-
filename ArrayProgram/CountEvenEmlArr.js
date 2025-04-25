/*
	Count Even Numbers in Array
	Description: Count how many even numbers are in an array.
	Input: [1, 2, 3, 4, 5, 6]
	Output: 3
*/

let ar=[1, 2, 3, 4, 5, 6];
let count=0;
for(let i=0;i<ar.length;i++)
{
	if(ar[i]%2==0)
	{
		count++;
	}
}
console.log("Count of Even Elements is:"+count);