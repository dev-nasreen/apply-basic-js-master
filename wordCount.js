/*var speech = "I am a good  person. Because I don't heart any person";
var count = 0;
for(var i = 0; i<speech.length; i++){
    var char = speech[i];
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);

var lecture = "Hi, everyone   very   very good morning. I am Nasreen. I am your new teacher."

var count = 0;
for(var i=0; i<lecture.length; i++){
 var  word = lecture[i];
 if(word == " " && lecture[i-1] != " "){
     count++;
 }
}
count++;
console.log(count);

 */


var myLecture = "Hi, everyone    very   very good morning. I am Nasreen. I am your new teacher. I will teach you eavery morning."
var count = 0;
var i = 0;
while(i<myLecture.length){
    var myWord = myLecture[i];
  
    if(myWord == " "  &&  myLecture[i-1] != " " ){
       count++;
    }
    i++;
}
count++;
console.log(count);