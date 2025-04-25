/*	Palindrome Number
Description: Write a program to check if a number is a palindrome.
Input: n = 121
Output: Palindrome
*/

let no=121;
let temp=no;
let rev=0;
let rem;
while(no!=0)
{
	rem=no%10;
	rev=rev*10+rem;
	no=Math.floor(no/10);
}
if(temp===rev)
	console.log("Is Palindrom Number");
else
	console.log("Is Not Palindrom Number");
