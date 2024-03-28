const isPerfect=(num)=>{
    let sum=0;
    for(let i=1;i<num;i++)
    {
        if(num%i==0)
            sum+=i;
    }
    return sum==num;
}
let ans=isPerfect(45)?"Perfect number":"Number is'nt Perfect";
console.log(ans);
ans=isPerfect(28)?"Perfect number":"Number is'nt Perfect";
console.log(ans);
