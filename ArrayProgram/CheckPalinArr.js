/*Check if Array is Palindrome
Description: Check if an array is the same when reversed.
Input: [1, 2, 3, 2, 1]
Output: Palindrome
*/

let ar=[1, 2, 3, 2, 1];
let isPalim=true;
for(let i=0;i<parseInt(ar.length/2);i++)
{
	if(ar[i]!==ar[ar.length-1-i])
	{
		isPalim=false;
		break;
	}
}
if(isPalim)
{
	console.log("Palindrome");
}
else{
	console.log("Not Palindrome");
}