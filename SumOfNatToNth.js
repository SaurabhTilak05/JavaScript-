/* Sum of Natural Numbers
Description: Write a program to find the sum of the first n natural numbers.
Input: n = 5
Output: 15
*/


let no=5;
let sum=0;
let i=1;
while(i<=no)
{
	sum=sum+i;
	i++;
}
console.log("Sum is:"+sum);