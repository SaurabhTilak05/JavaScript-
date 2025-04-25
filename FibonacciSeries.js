/*Fibonacci Series
Description: Write a program to print the first n Fibonacci numbers.
Input: n = 5
Output: 0 1 1 2 3
*/

let lim=5;
let f1=0;
let f2=1;
while(lim>0)
{	console.log(f1);
	let fib=f1+f2;
	f1=f2;
	f2=fib;
	lim--;
}

