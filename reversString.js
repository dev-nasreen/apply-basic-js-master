function reversString(str){
    var reverse = '';
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

let lecture = "Hello July how r U?";
let output = reversString(lecture);
console.log(output);