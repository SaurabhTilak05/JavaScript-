/*1. Sum of Numbers
Description: Write a program to calculate the sum of numbers from 1 to n.
Input: n = 5
Output: 15
*/

let n=5;
let i=1;
let sum=0;
while(i<=n)
{
	sum=sum+i;
	i++;
}
console.log("Sum is:"+sum);