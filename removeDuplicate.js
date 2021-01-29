var numbers = [23, 45, 2, 3, 3, 2, 35, 45, 55, 70, 23];
function findDuplicates(numbers){
    var uniqueNumber = [];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        var index = uniqueNumber.indexOf(element);
        if(index == -1){
            uniqueNumber.push(element);
        }
    }
    return uniqueNumber;
}

console.log(findDuplicates(numbers));
/*
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}

*/
