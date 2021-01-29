/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

const check2000 = isLeapYear(17088);
console.log(check2000); 



let remainder = year % 4;
console.log(remainder == 0);
if(remainder == 0){
    console.log('This is a leap year.')
}else{
    console.log('This is not a leap year.')
}


function isLeapYear(year){
 const   remainder = year % 4;
    if(remainder == 0){
        
    }else{
       
    }

}

const chech2000 = isLeapYear(2001);
console.log(chech2000);



  console.log(isLeapYear(2000));

  function LeapYear(year) {
    if(year % 4 == 0)
    {
       if(year % 100 == 0)
       {
          if(year % 400 == 0)
          {
            console.log('This is a leap year.');
          }
          else
          {
            console.log('This is not a leap year.');
          }
       }
       else
       {
        console.log('This is a leap year.');
       }
    }
    else
    {
        console.log('This is not a leap year.');
    }
    return year;
}
console.log(LeapYear(2000));

*/
function isLeapYear(year) {
    if(myYear = (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0))){

        return 'The year is leap year and it is ' + year;  

        }else{
        return 'The year is not leap year and it is ' + year;

        }
  }
  
let result = isLeapYear(2000);
  console.log(result);