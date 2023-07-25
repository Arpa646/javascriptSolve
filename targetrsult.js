const reverse=(arr,tar)=>{
    let a=0;
   for (let j = 0; j < arr.length; j++) {
   
    let f=arr[a];
    for(i=1;i<arr.length;i++)
    {
        let sum =f+arr[i]
        if(sum==tar)
        {
            return [a,i,f,arr[i]];
        }
     
  
    }
    a=a+1 
}
    
   }
    const result=reverse([1, 3, 6, 8, 11, 15], 14);
    console.log(result)
    