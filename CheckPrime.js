/*
	Check for Prime Number
	Description: Write a program to check if a number n is prime.
	Input: n = 7
	Output: Prime
*/
let n=7;
let count=0;
for(let i=2;i<=n/2;i++)
{
	if(n%i==0)
	{
		count++;
	}
}	
if(count==0)
{
	console.log("Prime number");
}
else{
	console.log("Not Prime number");
}

	