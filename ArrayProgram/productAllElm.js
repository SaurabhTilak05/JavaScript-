// Write a function to given an array of integers, return a new array such that each
//  element at index i is the product of all elements in the original array except the one at i.
//  You must not use division and complete it in O(n) time.
// Input :
// const nums = [1, 2, 3, 4];
// Output : [24, 12, 8, 6]


let nums=[1, 2, 3, 4];
let left=0;
let i=0;
let mul=1;
let right=nums.length;
let k=[];
while(left!=right)
{
    if(left<=right)
    {
        if(left!=i)
        {   
            mul*=nums[left];
           
        }
        left++;
    }
    if(left===right)
    {
        srt="";
        k[i]=mul;
        left=0;
        i++;
        mul=1;
    }
    if(i==right)
    {
        break;
    }
}
console.log(k);