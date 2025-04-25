/* Reverse a Number
Description: Write a program to reverse the digits of a given number.
Input: n = 12345
Output: 54321
*/

let n=12345;
let rev=0;
while(n!=0)
{
	let rem=n%10;
	rev=rev*10+rem;
	n=parseInt(n/10);
}
console.log("Reverse is:"+rev);