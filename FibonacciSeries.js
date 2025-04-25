/*Fibonacci Series
Description: Write a program to print the first n Fibonacci numbers.
Input: n = 5
Output: 0 1 1 2 3
*/

let lim=5;
let f1=0;
let f2=1;
let i=1;
console.log(f1);
console.log(f2);

while(i<lim)
{
	let fib=f1+f2;
	f1=f2;
	f2=fib;
	console.log(fib);
	i++;
}

