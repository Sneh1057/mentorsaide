const isPalindrome=(str)=>{
    let n=str.length;
    let l=0,r=n-1;
    while(l<=r)
    {
        if(str[l]!=str[r])
        return false;
        l++;
        r--;
    }
    return true;
}
let ans=isPalindrome("Sneh");
if(ans)
    console.log("String is Palindrome");
else 
    console.log("String is not palindrome");
ans=isPalindrome("Anana");
if(ans)
    console.log("String is Palindrome");
else 
    console.log("String is not palindrome");