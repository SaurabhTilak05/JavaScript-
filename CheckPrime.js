/*
	Check for Prime Number
	Description: Write a program to check if a number n is prime.
	Input: n = 7
	Output: Prime
*/
let n=6;
let count=0;
for(let i=1;i<=n;i++)
{
	if(n%i==0)
	{
		count++;
	}
}	

if(count==2)
{
	console.log("Prime number");
}
else{
	console.log("Not Prime number");
}

	