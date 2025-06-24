
let ar= [10, 22, 9, 33, 21, 50, 41, 60];
let count=1;
let ind=0;
for(let i=0;i<ar.length;i++)
{
    if(ar[i+1]>ar[ind]){
        count++;
        ind=i+1;
    }
}
console.log(count);