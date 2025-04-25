/*Sum of First N Odd Numbers
Description: Write a program to calculate the sum of the first n odd numbers.
Input: n = 4
Output: 16
*/

let n=4;
let i=1;
let count=0;
let sum=0;
while(count<n)
{
	if(i%2!==0)
	{
		sum=sum+i;
		count++;
	}
	i++;
}
console.log("Sum is:"+sum);