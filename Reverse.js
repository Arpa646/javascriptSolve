


const reverse=(str)=>{
    let rvrs='';
    for(i=str.length-1;i>=0;i--)
    {
       
        rvrs=  rvrs+(str[i])
    
    
    }
    return rvrs
}
const result=reverse('hello world');
console.log(result)
