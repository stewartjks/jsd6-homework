/* 1) Create a function that accepts a number as a parameter,
adds the number to an array, and logs the array value to the console.
function jac(num) {
  var a = [];
  a.push(num);
  console.log(a); */
}
jac(5);

/* 2) Modify your function so it returns another function,
using a closure to reference the array created by the first function.
You should then be able to pass additional values to the returned function
and have them added to the original array. */
function jac() {
    var a = [];
    var tj = function(num) {
      a.push(num);
      console.log(a);
    }
    return tj;
}
var b = jac();
b(5);

/* 3) Test your code by creating two different arrays using the main function,
assigning each a different variable name.
You should then be able to call each of these new functions to add values
to each of the arrays independently, without affecting each other's values. */
function jac() {
  var a = [];
  var tj = function (num) {
    a.push(num);
    console.log(a);
  }
  return tj;
}
var b = jac();
var c = jac();
b(5); // return
c(10);
c(45);
c(1000);
b(22);
