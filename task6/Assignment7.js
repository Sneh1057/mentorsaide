const countVowels=(str)=>{
    let n=str.length;
    let vowel=0;
    for(let i=0;i<n;i++)
    {
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
            vowel++;
    }
    return vowel;
}
console.log(countVowels("Sneh"));
console.log(countVowels("growindia"));