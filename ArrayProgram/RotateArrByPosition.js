/*
	Rotate Array by N Positions
	Description: Rotate the array by n positions to the right.
	Input: [1, 2, 3, 4, 5], n = 2
	Output: [4, 5, 1, 2, 3]
	
*/
let ar=[1, 2, 3, 4, 5];
let p=2;
for(let i=p;i<ar.length;i++)
{	
	console.log(ar[i]);
}
for(let i=0;i<p;i++)
{
	console.log(ar[i]);
}