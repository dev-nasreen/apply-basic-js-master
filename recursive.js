
function factorial(n){
    var fact = 1;
    for(var i=1; i<=n; i++){
    fact = fact * i;
    }
    return fact;
}

var result = factorial(5);
console.log(result);

function factorialRecursion(num){
    if(num == 1){
        return 1;
    }else{
        return num * factorialRecursion(num - 1)
    }
} 

var ans = factorialRecursion(6);
console.log(ans);
