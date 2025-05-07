	/*
		Perfect Number
		Description: Write a program to check if a number is perfect.
		Input: n = 6
		Output: Perfect
	*/
	let a=6;
	let temp=a;
	let sum=0;
	for(let i=1;i<a;i++)
	{
		if(a%i==0)
		{
			sum=sum+i;
		}
	}
	if(sum==temp)
	{
		console.log("Perfect Number")
	}
	else{
		console.log("Not Perfect Number")
	}