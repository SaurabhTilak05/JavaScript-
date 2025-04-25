/*Armstrong Number
Description: Write a program to check if a number is an Armstrong number.
Input: n = 153
Output: Armstrong
*/

let n=153;
let temp=n;
let count=0;
while(temp!=0)
{
	temp=parseInt(temp/10);
	count++;
}
let sum=0;
let orgnum=n;
while(n!=0)
{
	let power=1;
	let rem = n % 10;
	for(let i=1;i<=count;i++)
	{
		power=power*rem;
	}
	sum=sum+power;
	n=parseInt(n/10);
}
if(sum==orgnum)
{
	console.log("Armstrong Number.....");
	
}
else{
	console.log("Not A Armstrong Number.....");
}

