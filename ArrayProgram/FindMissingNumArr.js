/*
	Find Missing Number in Array
	Description: Find the missing number in an array containing numbers from 1 to n.
	Input: [1, 2, 4, 5]
	Output: 3
*/

let ar=[1, 9, 4, 5];
ar.sort((a, b)=> b - a);
for(let i = 0; i < ar.length - 1; i++)
{
	for(let j = ar[i] - 1; j > ar[i + 1]; j--)
	{
		console.log(j);

	}
}
/*
let ar = [1, 9, 4, 5];

// Step 1: Sort the array in descending order
ar.sort((a, b) => b - a); 

// Step 2: Loop through the array and print ranges
for (let i = 0; i < ar.length - 1; i++) {
    for (let j = ar[i] - 1; j > ar[i + 1]; j--) { // Corrected the range printing logic
        console.log(j);
    }
}
	*/