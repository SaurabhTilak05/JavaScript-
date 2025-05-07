/*
	Count Digits Divisible by 3
	Description: Write a program to count the digits divisible by 3 in a number.
	Input: n = 123456
	Output: 2
*/

let a=123456;
let count=0;
while(a!=0)
{
	let rem=a%10;
	if(rem%3===0)
	{
		count++;
	}
	a=parseInt(a/10);
}
console.log(count);
