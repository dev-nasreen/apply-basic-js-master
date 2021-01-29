var a = 4;
var b = 8;
console.log('Before swap the value of a = ', a, 'and b = ', b);

temp = a;
a = 8;
b = temp;
console.log('After swap the value of a = ', a, 'and b = ', b);

var x = 9;
var y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log('After swap the value of x = ', x, 'and y = ', y);

var p = 5;
var q = 7;
[p, q] = [q, p];
console.log('After swap the value of p = ', p, 'and q = ', q);