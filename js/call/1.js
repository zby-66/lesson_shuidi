'use strict'
var foo = {
    value : 1,
    bar: function() {
        console.log(this.value);
    }
}

foo.bar();

const bar1 = foo.bar;
console.log(bar1());