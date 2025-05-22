/* Prime Factorization
Description: Write a program to perform prime factorization of a number n.
Input: n = 12
Output: 2 2 3
*/
let n=12;
for(let i=2;i<=n;i++)
{
	while(n%i==0)
	{
		console.log(i);
		n=n/i;
	}
}