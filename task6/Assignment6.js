const calculate=(num1,num2,operator)=>{
    if(operator=='*')
        return num1*num2;
    else if(operator=='-')
        return num1-num2;
    else if(operator=='+')
        return num1+num2;
    else
        return num1/num2;
}
console.log(calculate(10,6,'*'));
console.log(calculate(45,57,'-'));
console.log(calculate(45,23,'+'));
console.log(calculate(35,7,'/'));