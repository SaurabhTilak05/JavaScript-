/* Factorial of a Number
Description: Write a program to compute the factorial of a given number n.
Input: n = 4
Output: 24
*/


let no=4;
let i=1;
let fact=1;
while (i<=no)
{
	fact=fact*i;
	i++;
}
console.log(fact);