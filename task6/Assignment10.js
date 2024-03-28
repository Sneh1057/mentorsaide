const getTable=(num)=>{
    let curr=num;
    for(let i=0;i<10;i++)
    {
        console.log(curr);
        curr+=num;
    }
}
getTable(45);