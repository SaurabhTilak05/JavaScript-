/* Find the Duplicate Elements in Array
Description: Find all the duplicate elements in an array.
Input: [1, 2, 3, 4, 5, 1, 3]
Output: [1, 3]
*/

let ar=[1, 2, 3, 4, 5, 1, 3];
for(let i=0;i<ar.length;i++)
{
	for(let j=i+1;j<ar.length;j++)
	{
		if(ar[i]==ar[j])
		{
			console.log(ar[i]);
		}
	}
}