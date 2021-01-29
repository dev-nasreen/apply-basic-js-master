var num = 2.43456;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
for(var i = 0; i<6; i++){
    var randomNum = Math.random(num) * 6;
    var output = Math.round(randomNum);
    console.log(output);
}

//console.log(result);
//console.log(result2);
//console.log(result3);
