function largestNum() {
    var saad = 750;
    var yamin = 820;
    var mawa = 850;
    var simu = 950;

    if (mawa > saad) {
        if (mawa > yamin) {
            if (mawa > simu) {
                console.log("Mawa is biggest");
            }
            
            else {
                console.log("Simu is biggest");
            }
            return mawa;
        }
        
        else {
            console.log("Yamin is biggest");
           
        }
        return yamin;
    } else {
        if (saad > yamin) {
            if (saad > simu) {
                console.log("Saad is biggest");
            } else {
                console.log("Simu is biggest");
            }
            return saad;
        } else {
            console.log("Yamin is biggest");
        }
        return yamin;
    }
}
console.log(largestNum());


var saad = 750;
var yamin = 820;
var mawa = 850;
var simu = 950;

var max = Math.max(saad, yamin, mawa, simu);
console.log(max);
