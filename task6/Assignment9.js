const printFibonacci=(num)=>{
    console.log(0);
    console.log(1);
    let prev2=0,prev1=1;
    while((prev1+prev2)<num)
    {
        console.log(prev1+prev2);
        let temp=prev1+prev2;
        prev2=prev1;
        prev1=temp;
    }
}
printFibonacci(10);