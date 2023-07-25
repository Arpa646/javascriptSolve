const reverse=(arr)=>{
let sum=0;
    for(i=arr.length-1;i>=0;i--)
    {
       if(arr[i]>1)
       {
        sum=  sum+(arr[i])
       }
   
    
    
    }
    return sum
}
const result=reverse([2, -5, 10, -3, 7]);
console.log(result)
