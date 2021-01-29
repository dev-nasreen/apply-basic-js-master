

function total(numbers){
    var sum = numbers[0];
    for(var i=0; i<numbers.length; i++){
        var elements = numbers[i];
        sum = elements + sum;
    }
    return sum;
}
var numbers = [23, 45, 56, 67, 20, 40, 90];
var result = total(numbers);
console.log(result);