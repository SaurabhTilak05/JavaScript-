/*
	Sum of Digits
	Description: Write a program to calculate the sum of digits of a given number.
	Input: n = 234
	Output: 9
*/
let no=12345;
let sum=0;
while(no!=0)
{
	let rem=no%10;
	 sum+=rem;
	no=parseInt(no/10);
}
console.log(sum);