Array.prototype.mymap = function(callback) {
 for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
 }
}
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  console.log(num*10);
}