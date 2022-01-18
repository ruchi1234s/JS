
Array.prototype.myEach = function(callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this);
};


var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];
arr.myEach(function(word) {
    console.log(word);
});
