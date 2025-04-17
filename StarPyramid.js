let pattern="";
for(let i=1;i<6;i++)
{
	for(let j=1;j<6-i;j++)
	{
		pattern+=" ";
	}
	for(let k=1;k<=2*i-1;k++)
	{
		pattern+="*";
	}
	pattern+="\n";
}
console.log(pattern);