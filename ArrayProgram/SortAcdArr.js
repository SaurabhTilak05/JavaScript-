/*
	Sort Array in Ascending Order
	Description: Sort the elements of the array in ascending order.
	Input: [10, 2, 30, 4, 5]
	Output: [2, 4, 5, 10, 30]

*/
let ar=[10, 2, 30, 4, 5];
for(let i=0;i<ar.length;i++)
{
	for(let j=0;j<ar.length;j++)
	{
		if(ar[i]<ar[j])
		{
			let temp=ar[i];
			ar[i]=ar[j];
			ar[j]=temp;
		}
	}
}
for(let i=0;i<ar.length;i++)
{
	console.log(ar[i]);
}