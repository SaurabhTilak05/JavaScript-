/*
Print Hollow Right-Angle Triangle Pattern
Description: Write a program to print a hollow right-angle triangle pattern.
Input: n = 4


Output:

*
* *
*   *
* * * *

*/
for(let i=1;i<5;i++)
{
	let srt="";
	for(let j=1;j<5;j++)
	{
		if(j==i || i==4||j==1)
		{
			srt+="*";
		}
		else{
			srt+=" ";
		}
	}
	console.log(srt);
}