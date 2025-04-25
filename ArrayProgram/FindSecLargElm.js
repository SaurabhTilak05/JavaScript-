/* Find the Second Largest Element in Array
Description: Find the second largest element in an array.
Input: [10, 20, 30, 40, 50]
Output: 40
*/
let ar=[10, 20, 30, 40, 50];
let larg=ar[0];
let sec=ar[0];
for(let i=0;i<ar.length;i++)
{	
	if(ar[i]>larg)
	{
		sec=larg;
		larg=ar[i];
	}
	else if(ar[i]>sec  && ar[i]<larg)
	{
		sec=ar[i];
	}
}
console.log("Second Largest Element is:"+sec);