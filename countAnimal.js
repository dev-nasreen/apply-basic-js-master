function countAnimal(depth){
    var animal = 0;
    if(depth<=10){
        animal = depth *50;
    }else if(depth<= 30){
        var firstPart = 10 * 50;
        var remaining = depth -10;
        var secondPart = remaining * 100;
        animal = firstPart + secondPart;
    }else{
        var firstPart = 10 * 50;
        var secondPart = 20 * 100;
        var remaining = depth - 30;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var totalAnimal = countAnimal(25);
//console.log(totalAnimal);
///============================================//
function hotelCost(days){
    var rent = 0;
    if(days<=10){
        rent = days * 100;
    }else if(days<= 20){
        var first10days = 10 * 100;
        var remaining = days -10;
        var second10days = remaining * 80;
        rent = first10days + second10days;
    }else{
        var first10days = 10 * 100;
        var second10days = 20 * 80;
        var remaining = days - 20;
        var thirdDays = remaining * 50;
        rent = first10days + second10days + thirdDays;
    }
    return rent;
}

var totalCost = hotelCost(5);
console.log(totalCost);