var marks = [23, 45, 56, 667, 78, 89, 98];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest value is: ', max);


var arr = ['Mili', 'Simin', 'sumayya', 'Laboni', 'JannatulMawa', 'ForkanHossainYamin'];

function longestStringForLoop(arr) {
    let word = ' ';
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }

  console.log(longestStringForLoop(arr));

