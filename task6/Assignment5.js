const getPrime=(n)=>{
    const primes=[n];
    for(let i=0;i<n;i++)
        primes[i]=0;
    for(let i=2;i<=n;i++)
    {
        if(primes[i]==0)
        {
            console.log(i);
            for(let j=i+i;j<=n;j+=i)
                primes[j]=1;
        }
    }
}
getPrime(10);